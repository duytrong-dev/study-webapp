import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
    return (
        <div className="w-full h-full grid grid-cols-1 gap-4 relative lg:grid-cols-5">
            <Link href={'/'} className="absolute left-0 top-6 z-10">
                <Image src="/logo.png" alt="logo" width={70} height={100}/>
            </Link>

            <div className="left-section w-full h-full hidden relative flex-col justify-center items-center lg:flex lg:col-span-3">
                <div className="content flex flex-col w-[80%] gap-14 lg:-translate-y-20 xl:translate-y-0">
                    <div className="title flex flex-col gap-6">
                        <h1 className="main-title text-6xl font-bold text-primarycolor-blue">Chào mừng đến</h1>
                        <h3 className="sub-title text-4xl font-bold">Hệ thống của chúng tôi</h3>
                    </div>
                    <div className="auth-text gap-4">
                        <p className="text-xl font-normal">Nếu bạn đã có tài khoản</p>
                        <p className="text-xl font-normal">Bạn có thể <Link href={'/login'} className="text-primarycolor-blue font-medium hover:underline">đăng nhập tại đây!</Link></p>
                    </div>
                </div>
                <Image src="/login.png" alt="login" width={300} height={500} className="absolute bottom-0 right-0"/>
            </div>

            <div className="right-section w-full h-full justify-center items-center flex flex-col col-span-2">
                <div className="flex flex-col w-[70%] gap-8">
                    <h3 className="text-4xl font-bold text-center lg:text-start">Đăng ký</h3>
                    <div className="flex flex-col gap-8">
                        <input type="text" placeholder="Nhập email..." className="w-full bg-primarycolor-blue3 border-none outline-none h-10 px-4 py-2 text-lg rounded-sm"/>
                        <input type="text" placeholder="Tạo tên người dùng..." className="w-full bg-primarycolor-blue3 border-none outline-none h-10 px-4 py-2 text-lg rounded-sm"/>
                        <input type="text" placeholder="Nhập mật khẩu..." className="w-full bg-primarycolor-blue3 border-none outline-none h-10 px-4 py-2 text-lg rounded-sm"/>
                        <input type="text" placeholder="Xác nhận mật khẩu..." className="w-full bg-primarycolor-blue3 border-none outline-none h-10 px-4 py-2 text-lg rounded-sm"/>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8 ">
                        <Button className="w-full text-lg h-10 px-4 py-2 bg-primarycolor-blue shadow-lg shadow-primarycolor-blue transition-all duration-300 hover:translate-y-1 hover:shadow-none hover:bg-primarycolor-blue1 hover:text-primarycolor-gray">Đăng ký</Button>
                        <p className="text-primarycolor-gray">hoặc tiếp tục với</p>
                        <div className="flex gap-2">
                            <Button className="rounded-xl bg-primarycolor-blue4 hover:bg-primarycolor-blue4"><Image src="/facebook-logo.png" alt="facebook-logo" width={30} height={30}/></Button>
                            <Button className="rounded-xl bg-primarycolor-black hover:bg-primarycolor-black"><Image src="/ios-logo.png" alt="facebook-logo" width={30} height={30}/></Button>
                            <Button className="rounded-xl bg-green-400 hover:bg-green-400"><Image src="/google-logo.png" alt="facebook-logo" width={30} height={30}/></Button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 lg:hidden">
                        <p className="text-primarycolor-gray">Đã có tài khoản?</p>
                        <Link href={'/login'} className="text-primarycolor-blue hover:underline">Đăng nhập!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
  