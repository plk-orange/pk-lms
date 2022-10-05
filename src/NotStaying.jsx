import React from 'react'

const NotStaying = ({ list }) => {
    return (
        <div>
            {list.map((item, k) => {
                return (
                    <div key={k}>
                        <h4>{item.question}</h4>
                        <div>
                            <ul>
                                <li>{item.choice1}</li>
                                <li>{item.choice2}</li>
                                <li>{item.choice3}</li>
                                <li>{item.choice4}</li>
                            </ul>
                        </div>
                        <blockquote>{item.answer}</blockquote>
                    </div>
                )
            })}
        </div>
    )
}

export default NotStaying
