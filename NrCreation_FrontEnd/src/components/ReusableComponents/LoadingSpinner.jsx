import { Loader2 } from 'lucide-react'

const LoadingSpinner = ({ size = 'md', className = '' }) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    }

    return (

        <div className={`${sizeClasses[size]} ${className}`}>
            <div className="w-full h-full rounded-full border-2 border-[#871845] border-t-transparent animate-spin" />
        </div>
    )
}

export default LoadingSpinner 