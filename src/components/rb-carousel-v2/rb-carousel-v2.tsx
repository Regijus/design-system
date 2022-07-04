import { Component, Host, Prop, State, h } from '@stencil/core';
import { Size } from '../../utils/enums';
import { CarouselItem } from '../../utils/types';

const INITIAL_PROGRESS_BAR_INTERVAL_STEP = 0;
const MAX_PROGRESS_BAR_INTERVAL_STEPS = 100;

@Component({
	tag: 'rb-carousel-v2',
	styleUrl: 'rb-carousel-v2.scss',
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

	/**
	 * Items to display
	 */
	@Prop() items: Array<CarouselItem> = [];

	@State() activeSlideIndex: number = 0;

	@State() progressBarInterval: NodeJS.Timer;
	@State() progressBarIntervalStep: number;
	@State() isAutoSlideSwitchingActive: boolean;

	componentWillLoad() {
		this.isAutoSlideSwitchingActive = this.slideIntervalTime && this.items.length > 1;
		this.resetAutoSlideInterval();
	}

	private resetAutoSlideInterval(): void {
		if (!this.slideIntervalTime || this.items.length <= 1) {
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
		this.activeSlideIndex = this.activeSlideIndex === this.items.length - 1 ? 0 : this.activeSlideIndex + 1;
		this.resetAutoSlideInterval();
	}

	private decreaseActiveSlideIndex(): void {
		this.activeSlideIndex = this.activeSlideIndex === 0 ? this.items.length - 1 : this.activeSlideIndex - 1;
		this.resetAutoSlideInterval();
	}

	private selectActiveSlide(index): void {
		this.activeSlideIndex = index;
		this.resetAutoSlideInterval();
	}

	private getSlideClass(slideIndex): string {
		let slideClass = 'slide';

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
				<div class={`slide-container--${this.size}`}>
					{
						this.items
							.map((item, index) => <rb-carousel-item
									image-url={item.imageUrl}
									image-alt={item.imageAlt}
									class={this.getSlideClass(index)}
								/>
							)
					}
					{
						this.isAutoSlideSwitchingActive &&
						<div class="progress-bar-container">
							<div
								class="progress-bar-fill"
								style={this.getProgressBarStyle()}
							/>
						</div>
					}
					<div class="slide-indicator-dot-container">
						{
							this.items
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
