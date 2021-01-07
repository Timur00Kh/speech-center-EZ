<script lang="ts">
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		UncontrolledDropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap/src';
	import data from '../data'

	let isOpen = false;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<Navbar color="light" light expand="md">
	<img src="{data.logo}" class="rounded mr-3 d-none d-md-block" alt="" width="50px">
	<NavbarBrand class="mx-auto" href="/">{data.title}</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ml-auto" navbar>
			{#each data.blocks as block}
				<NavItem>
					<NavLink href="#{block.anchor}">{block.title}</NavLink>
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
</Navbar>

<style>

</style>