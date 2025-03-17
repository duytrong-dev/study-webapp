import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Image src="/loading.gif" alt="loading" width={150} height={150} priority unoptimized/>
        </div>
    )
}

// loading tự động hiển thị khi chuyển trang