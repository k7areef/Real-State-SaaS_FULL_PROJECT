import Button from "@components/UI/Button";
import FormikField from "@components/UI/FormikField";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { supabase } from "@utils/supabaseClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faCheckCircle, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialAuth from "@components/auth/SocialAuth";

const validationSchema = Yup.object().shape({
    full_name: Yup.string().required("الاسم الكامل مطلوب"),
    phone: Yup.string().required("رقم الهاتف مطلوب"),
    email: Yup.string().email("البريد الإلكتروني غير صحيح").required("البريد الإلكتروني مطلوب"),
    password: Yup.string().required("كلمة المرور مطلوبة").min(6, "كلمة المرور يجب أن تكون أكثر من 6 أحرف"),
    role: Yup.string().oneOf(["guest", "host"], "الدور مطلوب"),
});
const fields = [
    {
        id: "full_name",
        type: "text",
        name: "full_name",
        label: "الاسم الكامل",
        placeholder: "الاسم الكامل",
    },
    {
        id: "email",
        type: "email",
        name: "email",
        autoComplete: "on",
        label: "البريد الإلكتروني",
        placeholder: "البريد الإلكتروني",
    },
    {
        id: "phone",
        type: "text",
        name: "phone",
        autoComplete: "on",
        label: "رقم الهاتف",
        placeholder: "رقم الهاتف",
    },
    {
        id: "password",
        type: "password",
        name: "password",
        label: "كلمة المرور",
        placeholder: "كلمة المرور",
    },
];

function SignupPage() {

    const navigate = useNavigate();

    const { state } = useLocation();
    const role = state?.role || "guest";

    const initialValues = React.useMemo(() => ({
        full_name: "",
        phone: "",
        email: "",
        password: "",
        role: role
    }), [role]);

    const handleSubmit = React.useCallback(async (values, actions) => {
        const { setSubmitting } = actions;
        try {
            // Signup with email and password and additional data
            const { error: signupError } = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
                options: {
                    data: {
                        full_name: values.full_name,
                        phone: values.phone,
                        role: values.role,
                    },
                },
            });
            if (signupError) throw signupError;

            // Show success message
            toast.success("تم انشاء الحساب بنجاح!");

            if (values.role === "guest") {
                // Navigate to home
                navigate("/");
            } else if (values.role === "host") {
                // Navigate to host dashboard
                navigate("/dashboard");
            } else {
                // Unknown role error
                toast.error("دور المستخدم غير معروف");
                return;
            };
        } catch (error) {
            console.error(error);
            // Show error message
            toast.error("خطأ في انشاء الحساب");
        } finally {
            setSubmitting(false);
        }
    }, [navigate]);

    return (
        <div className="signup-page py-10 md:py-10 min-h-screen flex items-center">
            <div className="container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue
                    }) => (
                        <form onSubmit={handleSubmit}>
                            {/* Form Header */}
                            <div className="form-header mb-10">
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold mb-3">إنشاء حساب جديد</h2>
                                <p className="text-sm sm:text-base md:text-lg lg:text-lg text-text">أبدأ رحلتك معنا الآن</p>
                            </div>
                            {/* Role Selection */}
                            <div className="role-selection mb-5 flex sm:flex-row flex-col sm:items-center gap-3 *:flex-1">
                                <label className="guest-role relative cursor-pointer">
                                    <input onChange={() => setFieldValue("role", "guest")} type="radio" name="role" value="guest" className="peer hidden" checked={values.role === "guest"} />
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary absolute z-10 top-1/2 sm:top-3 left-3 max-sm:-translate-y-1/2 scale-0 transition-transform delay-75 duration-300 peer-checked:scale-100" />
                                    <div className="content-wrapper rounded-lg bg-grey peer-checked:bg-primary/10 p-3 sm:p-5 border-2 border-transparent peer-checked:border-primary flex sm:flex-col items-center sm:justify-center gap-3 transition-colors">
                                        <FontAwesomeIcon icon={faUser} className="text-primary text-2xl" />
                                        <h3 className="font-semibold text-lg">ضيف</h3>
                                    </div>
                                </label>
                                <label className="host-role relative cursor-pointer">
                                    <input onChange={() => setFieldValue("role", "host")} type="radio" name="role" value="host" className="peer hidden" checked={values.role === "host"} />
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-primary absolute z-10 top-1/2 sm:top-3 left-3 max-sm:-translate-y-1/2 scale-0 transition-transform delay-75 duration-300 peer-checked:scale-100" />
                                    <div className="content-wrapper rounded-lg bg-grey peer-checked:bg-primary/10 p-3 sm:p-5 border-2 border-transparent peer-checked:border-primary flex sm:flex-col items-center sm:justify-center gap-3 transition-colors">
                                        <FontAwesomeIcon icon={faBuilding} className="text-primary text-2xl" />
                                        <h3 className="font-semibold text-lg">مضيف</h3>
                                    </div>
                                </label>
                            </div>
                            {/* Fileds */}
                            <div className="fields mb-5 space-y-3">
                                {fields.map((field, index) => (<FormikField
                                    key={index}
                                    {...{
                                        ...field,
                                        onChange: handleChange,
                                        value: values[field.name]
                                    }}
                                />))}
                            </div>
                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center"
                            >
                                <div className={`loading-spinner transition-all duration-300 grid ${isSubmitting ? 'grid-cols-[1fr] grid-rows-[1fr] me-2' : 'grid-cols-[0fr] grid-rows-[0fr]'}`}>
                                    <div className={`overflow-hidden transition-opacity duration-300 ${isSubmitting ? 'opacity-100' : 'opacity-0'}`}>
                                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                                    </div>
                                </div>
                                <span>إنشاء حساب</span>
                            </Button>
                            {/* Social Auth */}
                            <SocialAuth className="mt-10" />
                            {/* Form Footer */}
                            <div className="form-footer mt-5">
                                <p className="text-center text-sm text-gray-600">
                                    هل لديك حساب؟{" "}
                                    <Link
                                        to="/auth/login"
                                        className="text-primary font-semibold hover:underline"
                                    >
                                        تسجيل الدخول
                                    </Link>
                                </p>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SignupPage;