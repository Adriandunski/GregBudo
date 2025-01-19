export default function LingNavigationOrangeContainer({children} : {children: any}) {
    return (
        <div
            className={'flex flex-row items-center justify-center bg-orangeMain hover:bg-greenMain border-orangeMain border-2 text-white hover: gap-2 hover:cursor-pointer hover:bg-gold hover:text-white transition-all px-3 py-1 hover:shadow-2xl hover:-translate-y-1 rounded-md'}>
            {children}
        </div>
    );
}