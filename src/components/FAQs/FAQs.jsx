import {useState} from "react";
import './FAQs.css'
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

const questions = [
    {question: 'Will Scrum Day Guatemala have the option to see it virtually?',
        answer: 'In this edition of Scrum Day Guatemala, we will not have the option to attend virtually. Seize the opportunity to buy your ticket, as we will have a limited number of participants. We aim to provide high-level knowledge and share it with our participants.'},

    {question: 'What is the return policy?',
        answer: 'Once the ticket is purchased, no refunds will be issued. If you are unable to attend the event, you may transfer your ticket to someone else and provide us with the details of the person who will be attending in your place. If it is due to a health reason or similar circumstance, you can contact us to evaluate your case.'},

    {question: 'Will there be space for Networking?',
        answer: 'Yes, we will have a couple of specific moments where you can meet other participants and network with them, taking advantage of the event to expand your network.'},

    {question: 'Will food and drinks be offered with my ticket purchase?',
        answer: 'Yes, we will have 2 coffee breaks, one in the morning and one in the afternoon. Lunch is also included.'}
]
function FAQs() {
    const [clicked, setClicked] = useState(false);

    const toggle = (index) => {
        if(clicked === index)
            setClicked(null);
        else {
            setClicked(index);
        }
    }

    return (
        <div className = 'faq-container'>
            <h1 className = 'faq-heading'>Got Questions?</h1>
            <div className = 'item-container'>
                    {questions.map((item, i) => {
                        return (
                            <div className = 'item' key = {i} onClick = {() => toggle(i)}>
                                <div className='question-wrapper'>
                                    <h1 className='faq-question'>{item.question}</h1>
                                    <div className='icon-div'>{clicked === i ?
                                        <IoIosArrowUp className = 'arrow-icon'/> : <IoIosArrowDown className = 'arrow-icon'/>}</div>
                                </div>
                                {clicked === i ? (<div className='dropdown'>
                                        <p className='faq-answer'>{item.answer}</p>
                                    </div>
                                ) : null}
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default FAQs
