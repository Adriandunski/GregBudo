export default function ContainerButtonNormal({children} : {children: any}) {

    return (
        <div
            className={'flex flex-row items-center justify-center text-white px-4 py-2 rounded-md font-AdventPro font-medium text-base tracking-wide'}>
            {children}
        </div>
    );
}