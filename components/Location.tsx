
interface IProps {
    link: string,
}

const Location = async ({ link }: IProps) => {
    return (
        <div className="pt-5">
            <h2 className="mx-auto w-max font-mono text-[#c6754d] text-3xl pb-3">Location</h2>
            <div className="text-[#2b1105] font-mono max-w-[250px] mx-auto text-center pb-3">The establishment where our event will be held</div>
            <iframe className="border-none mx-auto pb-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.2077645697083!2d69.21417842881456!3d41.225451945103124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61d4a552074b%3A0x66a484ece31678fe!2sMeros%20Restoran!5e0!3m2!1sru!2s!4v1768818905197!5m2!1sru!2s" width="250" height="250" loading="lazy" ></iframe>
            <a className="bg-[#c6754d] mx-auto w-max text-white font-mono py-2 px-3 block" href={link}>Open map</a>
            
        </div>
    )
}

export default Location