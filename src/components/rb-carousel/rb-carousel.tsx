import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { Size } from '../../utils/enums';

@Component({
	tag: 'rb-carousel',
	styleUrl: 'rb-carousel.css',
	shadow: true,
})
export class RbCarousel {
	/**
	 * Time interval for slides automatic switching (in ms)
	 */
	@Prop() slideIntervalTime: number;

	/**
	 * Size of the carousel images
	 */
	@Prop() size: Size = Size.Small;

	@Element() host: HTMLRbCarouselElement;

	@State() activeSlideIndex: number = 0;
	@State() slideElements: Array<Element> = [];
	@State() slideInterval: any;

	@State() progressBar: HTMLElement;
	@State() progressBarFillInterval: any;
	@State() progressBarFillStepTime: number;

	componentWillRender() {
		this.slideElements = Array.from(this.host.children);
		this.resetAutoSlideInterval();
	}

	private setProgressBarElement(element): void {
		if (!element) {
			return;
		}

		this.progressBar = element as HTMLElement;
	}

	private resetAutoSlideInterval(): void {
		if (!this.slideIntervalTime) {
			return;
		}

		clearInterval(this.slideInterval);
		clearInterval(this.progressBarFillInterval);

		this.slideInterval = setInterval(() => {
			this.increaseActiveSlideIndex();
		}, this.slideIntervalTime);

		this.progressBarFillInterval = setInterval(() => {
			console.log(this.progressBar.style.width);
		}, this.progressBarFillStepTime);
	}

	private increaseActiveSlideIndex(): void {
		this.activeSlideIndex = this.activeSlideIndex === this.slideElements.length - 1 ? 0 : this.activeSlideIndex + 1;
		this.resetAutoSlideInterval();
	}

	private decreaseActiveSlideIndex(): void {
		this.activeSlideIndex = this.activeSlideIndex === 0 ? this.slideElements.length - 1 : this.activeSlideIndex - 1;
		this.resetAutoSlideInterval();
	}

	private selectActiveSlide(index): void {
		this.activeSlideIndex = index;
		this.resetAutoSlideInterval();
	}

	private getSlideClass(slideIndex): string {
		let slideClass = `slide slide--${this.size}`;

		if (slideIndex !== this.activeSlideIndex) {
			slideClass += ' slide--inactive';
		}

		return slideClass;
	}

	render() {
		return (
			<Host>
				<button name="Previous slide" class="button button--left" onClick={() => this.decreaseActiveSlideIndex()}>
					<span class="chevron chevron--left" />
				</button>
				<div>
					{
						this.slideElements
							.map((child, index) => <div
									innerHTML={child.outerHTML}
									class={this.getSlideClass(index)}
								/>
							)
					}
					<div class={this.slideIntervalTime ? 'progress-bar-container' : 'progress-bar-container progress-bar-container--inactive'}>
						<div class="progress-bar-fill" ref={(el) => this.setProgressBarElement(el)}></div>
					</div>
					<div class="slide-indicator-dot-container">
						{
							this.slideElements
								.map((_, index) => <div
									role="button"
									class={index === this.activeSlideIndex ? 'dot dot--active' : 'dot'}
									onClick={() => this.selectActiveSlide(index)}
								/>)
						}
					</div>
				</div>
				<button name="Next slide" class="button button--right" onClick={() => this.increaseActiveSlideIndex()}>
					<span class="chevron chevron--right" />
				</button>
			</Host>
		)
	}
}
