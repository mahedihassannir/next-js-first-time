import Link from "next/link";



const linksa = [
    {
        path: '/',
        title: "about.jsx"
    },
    {
        path: '/',
        title: "profile"
    },
    {
        path: '/maf',
        title: "not valide"
    },

]


const Header = () => {

    return (
        <div>
            <h5>my name is mahedi i ii ljhlh</h5>
            <nav>
                <ul>
                    {
                        linksa.map(({path,title})=>{

                            <li key={path}>
                                <Link href={path}>{title}</Link>
                            </li>

                        })
                    }
                </ul>



            </nav>
        </div>
    );
};

export default Header;