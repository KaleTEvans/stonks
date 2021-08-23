import React from 'react';
import { Row, Col } from 'react-bootstrap';

class SentimentModel {
    constructor(CompanySentiment, ticker) {
        this.CompanySentiment = CompanySentiment;
        this.buzzScore = this.CompanySentiment.buzz.buzz.toFixed(2);
        this.positiveSentiment = this.CompanySentiment.sentiment.bullishPercent;
        this.negativeSentiment = this.CompanySentiment.sentiment.bearishPercent;
        this.ticker = ticker

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
                        <p className={'mb-1 ' + letterColor}>Buzz Score: {this.buzzScore}</p>
                    </Col>
                    <Col>
                        <p className='mb-1'>{this.ticker} has been receiving {moreOrLess} news coverage lately</p>
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
            text = 'Very Bullish'
        } if (1 <= sentimentRatio < 1.5) {
            bullOrBear = 'light-green';
            text = 'Somewhat Bullish';
            this.sentimentRating = this.sentimentRating + 0.5
        } if (sentimentRatio < 1) {
            bullOrBear = 'red';
            text = 'Bearish';
        }
        return (
            <>
                <Col md={5}>
                    <p>Bullish Sentiment %: <span className='green mb-1'>{this.positiveSentiment}</span></p>
                </Col>
                <Col md={5}>
                    <p>Bearish Sentiment %: <span className='red mb-1'>{this.negativeSentiment}</span></p>
                </Col>
                <Col md={2}>
                    <p className={'mb-1 ' + bullOrBear}>{text}</p>
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