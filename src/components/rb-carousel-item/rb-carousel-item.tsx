import { Component, Prop, h, Host } from '@stencil/core';

@Component({
	tag: 'rb-carousel-item',
	styleUrl: 'rb-carousel-item.css',
})
export class RbCarousel {
	/**
	 * Direct URL to the image
	 */
	@Prop() imageUrl: string;

	/**
	 * Image alt tag (for accessibility)
	 */
	@Prop() imageAlt?: string;

	render() {
		return (
			<Host>
				<img src={this.imageUrl} alt={this.imageAlt} class="image" />
			</Host>
		)
	}
}
