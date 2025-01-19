export default function LingNavigationContainer({children} : {children: any}) {
    return (
        <div
            className={'flex flex-row items-center justify-center text-white hover: gap-2 hover:cursor-pointer hover:bg-orangeDark hover:text-greenMain hover:-translate-y-1  transition-all px-3 py-1 hover:shadow-2xl rounded-md'}>
            {children}
        </div>
    );
}