import { Component, Element, Host, Prop, State, h } from '@stencil/core';

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

	@Element() host: HTMLRbCarouselElement;

	@State() activeSlideIndex: number = 0;
	@State() slideElements: Array<Element> = [];
	@State() slideInterval: any;

	componentWillRender() {
		this.slideElements = Array.from(this.host.children);
		this.resetAutoSlideInterval();
	}

	private resetAutoSlideInterval() {
		if (!this.slideIntervalTime) {
			return;
		}

		clearInterval(this.slideInterval);

		this.slideInterval = setInterval(() => {
			this.increaseActiveSlideIndex();
		}, this.slideIntervalTime);
	}

	private increaseActiveSlideIndex(): void {
		this.activeSlideIndex = this.activeSlideIndex === this.slideElements.length - 1 ? 0 : this.activeSlideIndex + 1;
		this.resetAutoSlideInterval();
	}

	private decreaseActiveSlideIndex(): void {
		this.activeSlideIndex = this.activeSlideIndex === 0 ? this.slideElements.length - 1 : this.activeSlideIndex - 1;
		this.resetAutoSlideInterval();
	}

	render() {
		return (
			<Host>
				<button class="button button--left" onClick={() => this.decreaseActiveSlideIndex()}>
					Left
				</button>
				<div>
					{
						this.slideElements
							.map((child, index) => <div
									innerHTML={child.outerHTML}
									class={index === this.activeSlideIndex ? 'slide' : 'slide slide--inactive'}
								/>
							)
					}
					<div class="slide-indicator-dot-container">
						{
							this.slideElements
								.map((_, index) => <div class={index === this.activeSlideIndex ? 'dot dot--active' : 'dot'} />)
						}
					</div>
				</div>
				<button class="button button--right" onClick={() => this.increaseActiveSlideIndex()}>
					Right
				</button>
			</Host>
		)
	}
}