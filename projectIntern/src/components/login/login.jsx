import Loginform from "./login_form";
import Loginlogo from "./login_logo";

export default function Login() {
  return (
    <>
      <div className="bg-[#11111D] h-screen flex flex-col lg:flex-row justify-center items-center space-y-12 space-y-0 space-x-20 gap-20">
        {/* Logo Section */}
        <Loginlogo />

        {/* Login Form Section */}
        <Loginform />
      </div>
    </>
  );
}
