import { useDispatch } from "react-redux"
import { sortChange } from "../slices/userSlice"

const Filter = () => {

    const dispatch = useDispatch()

    const categories = [
        {
            id: 1,
            name: 'All',
            active: true,
        },
        {
            id: 2,
            name: 'Animation',
            active: false,
        },
        {
            id: 3,
            name: 'Branding',
            active: false,
        },
        {
            id: 4,
            name: 'Illustration',
            active: false,
        },
        {
            id: 5,
            name: 'Mobile',
            active: false,
        },
        {
            id: 6,
            name: 'Print',
            active: false,
        },
        {
            id: 7,
            name: 'Product Design',
            active: false,
        },
        {
            id: 8,
            name: 'Typography',
            active: false,
        },
        {
            id: 9,
            name: 'Web Design',
            active: false,
        }
    ]

    return (
        <div className="w-screen flex items-center gap-[5px] justify-start mt-[32px] overflow-y-scroll lg:justify-center px-[10px]">
            {categories.map((cat) => (
                <ul className="list" key={cat.id}>
                    {cat?.active
                        ? <li className="py-[12px] px-[10px] font-medium FilterBg text-black rounded-lg">{cat.name}</li>
                        : <li className="py-[12px] px-[10px] font-medium">{cat.name}</li>
                    }
                </ul>
            ))}
        </div>
    )
}

export default Filter