import { Component, Element, Host, Prop, State, h } from '@stencil/core';
import { Size } from '../../utils/enums';

const INITIAL_PROGRESS_BAR_INTERVAL_STEP = 0;
const MAX_PROGRESS_BAR_INTERVAL_STEPS = 100;

@Component({
	tag: 'rb-carousel',
	styleUrl: 'rb-carousel.scss',
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
	@Prop() size: Size = Size.Medium;

	@Element() host: HTMLRbCarouselElement;

	@State() activeSlideIndex: number = 0;
	@State() slideElements: Array<Element> = [];

	@State() progressBarInterval: NodeJS.Timer;
	@State() progressBarIntervalStep: number;

	componentWillLoad() {
		this.slideElements = Array.from(this.host.children);
		this.resetAutoSlideInterval();
	}

	private resetAutoSlideInterval(): void {
		if (!this.slideIntervalTime) {
			return;
		}

		this.progressBarIntervalStep = INITIAL_PROGRESS_BAR_INTERVAL_STEP;

		const progressBarIntervalTime = this.slideIntervalTime / MAX_PROGRESS_BAR_INTERVAL_STEPS;

		clearInterval(this.progressBarInterval);

		this.progressBarInterval = setInterval(() => {
			this.progressBarIntervalStep = this.progressBarIntervalStep + 1;

			if (this.progressBarIntervalStep === MAX_PROGRESS_BAR_INTERVAL_STEPS) {
				this.increaseActiveSlideIndex();
			}
		}, progressBarIntervalTime);
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

	private getProgressBarStyle(): { width: string } {
		const widthPercentage = this.progressBarIntervalStep >= MAX_PROGRESS_BAR_INTERVAL_STEPS
			? MAX_PROGRESS_BAR_INTERVAL_STEPS
			: this.progressBarIntervalStep + 1;

		return {
			width: `${widthPercentage}%`,
		};
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
					{
						this.slideIntervalTime &&
						<div class="progress-bar-container">
							<div
								class="progress-bar-fill"
								style={this.getProgressBarStyle()}
							/>
						</div>
					}
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
