import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import ROUTES from '@/constants/routes'
interface Props {
  _id: string
  name: string
  questions?: number
  showCount?: boolean
  compact?: boolean
}

const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
  return (
    <Link href={ROUTES.TAGS(_id)} className={`flex items-center gap-2 ${compact ? 'py-2' : 'p-3'}`}>
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex items-center gap-2">
          <span className="body-medium text-dark400_light700">{name}</span>
          {showCount && <p className="text-dark400_light700">({questions})</p>}  
        </div>
      </Badge>
    </Link>
  )
  
}

export default TagCard