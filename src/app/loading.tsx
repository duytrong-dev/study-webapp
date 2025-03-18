import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Image src="/loading.gif" alt="loading" width={100} height={100} priority unoptimized/>
        </div>
    )
}

// loading tự động hiển thị khi chuyển trang