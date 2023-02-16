import React from 'react'
import { Container } from './styled/Container.styled'
import {
    Attribution,
    AttributionA,
    ButtonSignUp,
    Hstack,
    Hstackflexi,
    Joincommunity,
    Monthlysubscribe,
    Styledsingleprice,
    Whyus
} from './styled/Singleprice.styled'

export const SinglePriceGrid = () => {
  return (
    <Container>
        <Styledsingleprice>
            <Joincommunity>
                <h1>
                    Join our community
                </h1>
                <h2>
                    30-day, hassle-free money back guarantee
                </h2>
                <h3>
                    Gain access to our full library of tutorials along with expert code reviews.
                    Perfect for any developers who are serious about honing their skills.
                </h3>
            </Joincommunity>
            <Hstackflexi>
                <Monthlysubscribe>
                    <h2>
                        Monthly Subscription
                    </h2>
                    <Hstack>
                        <h1>
                            $29
                        </h1>
                        <span>per month</span>
                    </Hstack>
                    <h3>
                        Full access for less than $1 a day
                    </h3>
                    <ButtonSignUp>
                        Sign Up
                    </ButtonSignUp>
                </Monthlysubscribe>
                <Whyus>
                    <h2>
                        Why Us
                    </h2>
                    <ul>
                        <li>Tutorials by industry experts</li>
                        <li>Peer &amp; expert code review</li>
                        <li>Coding exercises</li>
                        <li>Access to our GitHub repos</li>
                        <li>Community forum</li>
                        <li>Flashcard decks</li>
                        <li>New videos every week</li>
                    </ul>
                </Whyus>
            </Hstackflexi>
        </Styledsingleprice>
        <Attribution>
            <AttributionA>
                <h4>Challenge by<a href="https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Single Price Grid.</a></h4>
            </AttributionA>
            <AttributionA>
                <h4>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></h4>
            </AttributionA>
        </Attribution>
    </Container>
  )
}
