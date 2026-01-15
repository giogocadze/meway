import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full border-b border-gray-300 bg-white">

            <div className="mx-auto max-w-7xl px-4">
                {/* Top bar */}
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image src="/meway.svg" width={107} height={33} alt="meeway" />
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-black">
                            <Image src="/car.svg" width={24} height={24} alt="car.svg" />
                            <span>გაქირავება</span>
                        </button>

                        <button className="h-9 w-9 rounded-full border  border-gray-200 flex items-center justify-center hover:bg-gray-100">
                            <Image width={24} height={24} alt="earth" src="/earth.svg" />
                        </button>
                        <div>
                            <button className="flex items-center gap-5 rounded-full border border-gray-200 px-3 py-1 hover:bg-gray-100">
                                <Image
                                    width={16}
                                    height={16}
                                    alt="menu"
                                    src="/line.svg"
                                />

                                <Image
                                    width={30}
                                    height={30}
                                    alt="profile"
                                    src="/profile.svg"
                                />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    );
}
