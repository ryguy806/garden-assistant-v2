import React from 'react'

type DetailsModalProps = {
    details: string
}

const DetailsModal = ({details}: DetailsModalProps) => {
  return (
    <div className="h-auto w-full border-2 border-black p-2 text-md">
        {details}
    </div>
  )
}

export default DetailsModal