import React, { Component } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption } from 'reactstrap';

const items = [
  {
    src: 'What industry experts say 1',
    altText: '“Quickly and easily generate video versions of your sound recordings to share on video networks, social media, and mobile.”',
    caption: 'Leopold L., Gypsy Records'
  },
  {
    src: 'What industry experts say 2',
    altText: '“Quickly and easily generate video versions of your sound recordings to share on video networks, social media, and mobile.”',
    caption: 'Leopold L., Gypsy Records'
  },
  {
    src: 'What industry experts say 3',
    altText: '“Quickly and easily generate video versions of your sound recordings to share on video networks, social media, and mobile.”',
    caption: 'Leopold L., Gypsy Records'
  }
];

export default class SlideItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <div className="slide-content text-center">
            <h2>{item.src}</h2>
            <p>{item.altText}</p>
            <span>{item.caption}</span>
          </div>  
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}