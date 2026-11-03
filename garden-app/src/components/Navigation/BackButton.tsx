import { ArrowBigLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

type BackButtonProps = {
    fallbackUrl: string
}

const BackButton = ({fallbackUrl}: BackButtonProps) => {

    const navigate = useNavigate()

    const handleBackButtonPress = () => {
        if (window.history.length > 1) {
            navigate(-1)
        } else {
            navigate(fallbackUrl, {replace: true})
        }
    }

  return <button onClick={handleBackButtonPress} className="flex flex-row items-center space-x-2 mx-auto"><ArrowBigLeft/>Back</button>
}

export default BackButton