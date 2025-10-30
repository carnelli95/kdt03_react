import React from 'react'

export default function TailSelect() {
  return (
    <form className="max-w-sm mx-auto">
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">--지역선택--</option>
                <option value="US">강서구</option>
                <option value="CA">금정구</option>
                <option value="FR">기장군</option>
                <option value="DE">동구</option>
                <option value="DE">동래구</option>
                <option value="DE">부산진구</option>
                <option value="DE">북구</option>
                <option value="DE">사상구</option>
                <option value="DE">사하구</option>
                <option value="DE">수영구</option>
                <option value="DE">영도구</option>
                <option value="DE">중구</option>
                <option value="DE">해운대구</option>
        </select>
    </form>
  )
}
