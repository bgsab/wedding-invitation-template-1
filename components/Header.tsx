interface IProps {
    names: string[]
}
const Header = async ({ names }: IProps) => {
    return (
        <header className="pt-10">
            <nav className="flex flex-col gap-6">
                <div className="relative w-max mx-auto">
                    <div className="w-26 h-26 border border-[#2b1105] rounded-full"></div>
                    <div className="text-[#2b1105] text-4xl absolute top-[55%] left-[50%] translate-y-[-50%] translate-x-[-50%]">{`${names[0][0]}&${names[1][0]}`}</div>
                </div>
                <ul className="px-20 flex flex-row justify-between items-center">
                    <li className="text-[#2b1105] text-2xl font-Times">UZ</li>
                    <span className="block w-[1px] h-[50px] bg-[#2b1105]"></span>
                    <li className="text-[#2b1105] text-2xl font-Times">RU</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header