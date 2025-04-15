import Logo from "@/components/custom/logo";
import { SocialButton } from "@/components/custom/social-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div className="w-full h-full grid grid-cols-1 relative lg:grid-cols-5">
            <Link href={'/'} className="flex justify-center items-center lg:absolute lg:left-0 lg:top-6 z-10">
                <Logo />
            </Link>

            <div className="left-section w-full h-full hidden relative flex-col justify-center items-center lg:flex lg:col-span-3">
                <div className="content flex flex-col w-[80%] gap-14 lg:-translate-y-20 xl:translate-y-0">
                    <div className="title flex flex-col gap-6">
                        <h1 className="main-title text-6xl font-bold text-primarycolor-blue">Chào mừng đến</h1>
                        <h3 className="sub-title text-4xl font-bold">Hệ thống của chúng tôi</h3>
                    </div>
                    <div className="auth-text gap-4">
                        <p className="text-xl font-normal">Nếu bạn chưa có tài khoản</p>
                        <p className="text-xl font-normal">Bạn có thể <Link href={'/register'} className="text-primarycolor-blue font-medium hover:underline">đăng ký tại đây!</Link></p>
                    </div>
                </div>
                <Image src="/login.png" alt="login" width={300} height={500} className="absolute bottom-0 right-0"/>
            </div>

            <div className="right-section w-full h-full justify-center items-center flex flex-col col-span-2 lg:w-auto lg:h-auto">
                <div className="flex flex-col w-[70%] gap-8">
                    <h3 className="text-4xl font-bold text-center lg:text-start">Đăng nhập</h3>
                    <div className="flex flex-col gap-8">
                        <input type="text" placeholder="Nhập email..." className="w-full bg-primarycolor-blue3 border-none outline-none h-10 px-4 py-2 text-lg rounded-sm"/>
                        <div className="flex flex-col gap-2">
                            <input type="password" placeholder="Nhập mật khẩu..." className="w-full bg-primarycolor-blue3 border-none outline-none h-10 px-4 py-2 text-lg rounded-sm"/>
                            <Link href={"/forgot-password"} className="text-xs self-end text-primarycolor-gray hover:underline">Quên mật khẩu ?</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8 ">
                        <Button className="w-full text-lg h-10 px-4 py-2 bg-primarycolor-blue shadow-lg shadow-primarycolor-blue transition-all duration-300 hover:translate-y-1 hover:shadow-none hover:bg-primarycolor-blue1 hover:text-primarycolor-gray">Đăng nhập</Button>
                        <SocialButton/>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 lg:hidden">
                        <p className="text-primarycolor-gray">Chưa có tài khoản?</p>
                        <Link href={'/register'} className="text-primarycolor-blue hover:underline">Đăng ký tại đây!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
  