import { useState } from "react"

export default function H4() {
    let [city,setCity] = useState<string>('')
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value)
    }
    return (
        <div>
            <h2>Home work 4:</h2>
            <label htmlFor="">Tỉnh/ Thành Phố: {city}</label>
            <span id="select"></span> <br />
            <select name="" onChange={handleSelect}>
                <option value="">Chọn Tỉnh/ Thành Phố</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Gia Lai">Gia Lai</option>
                <option value="Huế">Huế</option>
                <option value="Bắc Giang">Bắc Giang</option>
                <option value="Tp Hồ Chí Minh">Tp Hồ Chí Minh</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
            </select>
        </div>
    )
}