<script lang="ts">
	// import {
	// 	Collapse,
	// 	Navbar,
	// 	NavbarToggler,
	// 	NavbarBrand,
	// 	Nav,
	// 	NavItem,
	// 	NavLink,
	// 	UncontrolledDropdown,
	// 	DropdownToggle,
	// 	DropdownMenu,
	// 	DropdownItem
	// } from 'sveltestrap/dist/sveltestrap';

	import Collapse from 'sveltestrap/src/Collapse';
	import Navbar from 'sveltestrap/src/Navbar';
	import NavbarToggler from 'sveltestrap/src/NavbarToggler';
	import NavbarBrand from 'sveltestrap/src/NavbarBrand';
	import Nav from 'sveltestrap/src/Nav';
	import NavItem from 'sveltestrap/src/NavItem';
	import NavLink from 'sveltestrap/src/NavLink';
	// import UncontrolledDropdown from 'sveltestrap/src/UncontrolledDropdown';
	// import DropdownToggle from 'sveltestrap/src/DropdownToggle';
	// import DropdownMenu from 'sveltestrap/src/DropdownMenu';
	// import DropdownIte from 'sveltestrap/src/DropdownIte';

	import data from '../data'

	let isOpen = false;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<Navbar style="position: sticky; top:0;z-index: 10;" color="light" light expand="md">
	<div class="w-100" style="display: flex; align-items: center;flex-flow: row wrap;">
		<div class="justify-content-md-center" style="display: flex; align-items: center;width: 100%;">
			<img src="{data.logo}" class="rounded mr-3  logo" alt="logo">
			<NavbarBrand class="" href="./">{data.title}</NavbarBrand>
			<NavbarToggler class="ml-auto" on:click={() => (isOpen = !isOpen)} />
		</div>

		<Collapse class="w-100" {isOpen} navbar expand="md" on:update={handleUpdate}>
			<Nav class="mx-auto" navbar>
				{#each data.blocks as block}
					<NavItem>
						<NavLink on:click={() => (isOpen = false)} href="#{block.anchor}">{block.title}</NavLink>
					</NavItem>
				{/each}
	<!--			<UncontrolledDropdown nav inNavbar>-->
	<!--				<DropdownToggle nav caret>Options</DropdownToggle>-->
	<!--				<DropdownMenu right>-->
	<!--					<DropdownItem>Option 1</DropdownItem>-->
	<!--					<DropdownItem>Option 2</DropdownItem>-->
	<!--					<DropdownItem divider />-->
	<!--					<DropdownItem>Reset</DropdownItem>-->
	<!--				</DropdownMenu>-->
	<!--			</UncontrolledDropdown>-->
			</Nav>
		</Collapse>
	</div>
</Navbar>

<style>
	.logo {
		width: 50px;
		height: 50px;
	}

	@media (max-width: 575px) {
		.logo {
			width: 25px;
			height: 25px;
		}
	}
</style>