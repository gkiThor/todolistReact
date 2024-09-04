import React from 'react'

export default function ListItem() {
  return (
    <li className="p-2 bg-white mb-2 rounded flex">
        <span>Item 1</span>
        <button className="ml-auto bg-red-600 w-6 h-6 rounded text-stone-200">X</button>
    </li>
  )
}
