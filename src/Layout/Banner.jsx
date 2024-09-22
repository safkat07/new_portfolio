import meImg from '../assets/Me.png'

const Banner = () => {
    return (
        <div className="bg-gradient-to-br from-black/85 via-gray-900 to-gray-800 h-screen text-6xl flex justify-center items-center">
            <div>
                <img src={meImg} alt="avatar" />
            </div>
        </div>
    )
}

export default Banner