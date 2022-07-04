import { Component, Event, EventEmitter, Prop, h, Host } from '@stencil/core';

@Component({
	tag: 'rb-carousel-item',
	styleUrl: 'rb-carousel-item.scss',
})
export class RbCarousel {
	/**
	 * Direct URL to the image
	 */
	@Prop() imageUrl: string;

	/**
	 * Image alt tag
	 */
	@Prop() imageAlt?: string;

	@Event() carouselItemClicked: EventEmitter<boolean>;

	private emitCarouselItemClickedEvent() {
		this.carouselItemClicked.emit(true);
	}

	render() {
		return (
			<Host>
				<img src={this.imageUrl} alt={this.imageAlt} class="image" onClick={() => this.emitCarouselItemClickedEvent()} />
			</Host>
		)
	}
}
