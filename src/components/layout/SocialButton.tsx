import Image from "next/image";
import { Button } from "../ui/button";

export function SocialButton () {
    return(
        <>
            <p className="text-primarycolor-gray">hoặc tiếp tục với</p>
            <div className="flex gap-2">
                <Button className="rounded-xl bg-primarycolor-blue4 hover:bg-primarycolor-blue4"><Image src="/facebook-logo.png" alt="facebook-logo" width={30} height={30}/></Button>
                <Button className="rounded-xl bg-primarycolor-black hover:bg-primarycolor-black"><Image src="/ios-logo.png" alt="facebook-logo" width={30} height={30}/></Button>
                <Button className="rounded-xl bg-green-400 hover:bg-green-400"><Image src="/google-logo.png" alt="facebook-logo" width={30} height={30}/></Button>
            </div>
        </>
    )
}