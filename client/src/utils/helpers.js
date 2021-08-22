import React from 'react';
import { Row, Col } from 'react-bootstrap';

class SentimentModel {
    constructor(CompanySentiment) {
        this.CompanySentiment = CompanySentiment;
        this.buzzScore = this.CompanySentiment.buzz.buzz.toFixed(2);
        this.positiveSentiment = this.CompanySentiment.sentiment.bullishPercent;
        this.negativeSentiment = this.CompanySentiment.sentiment.bearishPercent;

        this.sentimentRatingScore = 0;
    }
    generateBuzzScoreText() {
        let moreOrLess;
        let letterColor;
        if (this.buzzScore >= 1) {
            moreOrLess = 'more';
            letterColor = 'green';
            this.sentimentRating++
        } else {
            moreOrLess = 'less';
            letterColor = 'red'
        }
        return (
            <>
                <Row>
                    <Col xs={4} md={3}>
                        <p className={letterColor}>Buzz Score: {this.buzzScore}</p>
                    </Col>
                    <Col>
                        <p>This Stock has been receiving {moreOrLess} news coverage lately</p>
                    </Col>
                </Row>
            </>
        )
    }
    sentimentScore() {
        let bullOrBear;
        let text;
        let sentimentRatio = this.positiveSentiment / this.negativeSentiment;

        if (sentimentRatio >= 1.5) {
            bullOrBear = 'green';
            text = 'very bullish'
        } if (1 <= sentimentRatio < 1.5) {
            bullOrBear = 'light-green';
            text = 'somewhat bullish';
            this.sentimentRating = this.sentimentRating + 0.5
        } if (sentimentRatio < 1) {
            bullOrBear = 'bearish';
            text = 'bearish';
        }
        return (
            <>
                <Col md={6}>
                    <p>Bullish Sentiment %: <span className='green'>{this.positiveSentiment}</span></p>
                </Col>
                <Col md={6}>
                    <p>Bearish Sentiment %: <span className='red'>{this.negativeSentiment}</span></p>
                </Col>
            </>
        )
    }
    sentimentRating() {
        if (this.buzzScore >= 1) {
            this.sentimentRatingScore++
        }
        if (this.positiveSentiment / this.negativeSentiment >= 1.5) {
            this.sentimentRatingScore++
        }
        if (this.positiveSentiment / this.negativeSentiment < 1.5) {
            this.sentimentRatingScore = this.sentimentRatingScore + 0.5
        }

        return this.sentimentRatingScore
    }
}

export default SentimentModel 