<script>
	import data from "../data";
	import TeacherBlock from "../components/TeacherBlock.svelte";
	import { onMount } from "svelte";

	import Footer from "../components/Footer.svelte";

	onMount(() => {
		setTimeout(() => {
			const anchor = window.location.hash.replace("#", "");
			const anchorNode = document.getElementById(anchor);

			if (anchorNode) anchorNode.scrollIntoView();
		}, 200);
	});
</script>

<svelte:head>
	<title>Речевой центр Эльвиры Зайцевой</title>

	<!--Open Graph-->
	<meta property="og:locale" content="ru_RU">
	<meta property="og:type" content="article">
	<meta property="og:title" content="Речевой центр Эльвиры Зайцевой">
	<meta property="og:description" content="Мы осуществляем комплексную разностороннюю поддержку детей, основанную на нейропсихологии, дефектологии, психологии, педагогике. Это означает, что при работе с Вашим ребенком мы используем комплексный междисциплинарный подход при оценке причин трудностей ребенка, включаем знания разных специалистов в разработку индивидуальной программы коррекционного развития (невролога, нейропсихолога, логопеда-дефектолога, психолога). Мы помогаем детям, кому не смогли помочь другие. Осуществляем олное сопровождение ребенка до результата. Мы придаем очень большое значение работе с родителями, как в форме семейных консультаций, так и в форме прямых эфиров на радиоканале, публикаций материалов в социальных сетях.">
	<meta property="og:url" content="TODO">
	<meta property="og:image" content="{data.logo}">
	<meta property="og:site_name" content="{data.title}">
</svelte:head>

<div class="container" style="max-width: 1000px">
	<div class="row">
		<div id="{data.blocks[0].anchor}" class="col-12 mt-4">
			<img class="rounded w-100" src="{data.blocks[0].photo}" alt="TODO">
			<h1>
				<a href="#{data.blocks[0].anchor}">{data.blocks[0].title}</a>
			</h1>

			<h3>Мы проводим диагностику и осуществляем сопровождение детей с:</h3>
			<ol>
				<li>Задержкой речевого развития</li>
				<li>Задержкой психического развития;</li>
				<li>Задержкой психо-речевого развития</li>
				<li>Синдромом дефицита внимания и гиперактивности Ранним детским аутизмом</li>
				<li>Неврозоподобными состояниями</li>
				<li>Нарушением поведения и трудностями в обучении</li>
			</ol>
		</div>
		<div id="{data.blocks[1].anchor}" class="col-12 mt-4">
			<img class="rounded w-100" src="{data.blocks[1].photo}" alt="TODO">
			<h1>
				<a href="#{data.blocks[1].anchor}">{data.blocks[1].title}</a>
			</h1>

			<h3>Индивидуальная коррекционная работа включает в себя:</h3>
			<ol>
				<li>
					занятия с психологами и нейропсихологами (индивидуальный подбор комплекса физических упражнений)
				</li>
				<li>
					занятия с логопедом-дефектологом
				</li>
				<li>
					телесно-ориентированную терапию
				</li>
				<li>
					развивающие игры
				</li>
				<li>
					нашими нейропсихологами проводятся занятия в группах и в диадах
				</li>
				<li>
					Кроме того, наш центр практикует онлайн формат нейропсихологических и логопедических занятий, консультаций с родителями
				</li>
			</ol>
		</div>
		<div id="{data.blocks[2].anchor}" class="col-12 mt-4">
			<img class="rounded w-100" src="{data.blocks[2].photo}" alt="TODO">
			<h1>
				<a href="#{data.blocks[2].anchor}">{data.blocks[2].title}</a>
			</h1>

			<p>
				Речевой Центр был создан в 2017 году. Сейчас у нас работают 19 квалифицированных специалистов: нейропсихологов, психологов, логопедов-дефектологов, педагогов по дошкольной подготовке.
			</p>
			<p>
				Центр детской нейропсихологии имеет два филиала в Казани, что позволяет родителям выбрать наиболее удобный вариант для занятий.
			</p>
			<p>
				Комплексность подхода обеспечивается сочетанием на каждом занятии индивидуальных и групповых методов когнитивной, двигательной, эмоционально - личностной коррекции и телесно-ориентированной терапии
			</p>
			<p>
				На базе Центра проводятся круглые столы и встречи по обмену опытом со специалистами, работающими в области детской психологии и восстановительного обучения.
			</p>

		</div>

		<div id="{data.blocks[3].anchor}" class="col-12 mt-4">
			<img class="rounded w-100" src="{data.blocks[3].photo}" alt="TODO">
			<h1>
				<a href="#{data.blocks[3].anchor}">{data.blocks[3].title}</a>
			</h1>
			<p>
				Мы осуществляем комплексную разностороннюю поддержку детей, основанную на нейропсихологии, дефектологии, психологии, педагогике. Это означает, что при работе с Вашим ребенком мы используем комплексный междисциплинарный подход при оценке причин трудностей ребенка, включаем знания разных специалистов в разработку индивидуальной программы коррекционного развития (невролога, нейропсихолога, логопеда-дефектолога, психолога). Мы помогаем детям, кому не смогли помочь другие. Осуществляем олное сопровождение ребенка до результата. Мы придаем очень большое значение работе с родителями, как в форме семейных консультаций, так и в форме прямых эфиров на радиоканале, публикаций материалов в социальных сетях.
			</p>
		</div>
		<TeacherBlock/>
		<div id="{data.blocks[5].anchor}" class="col-12 mt-4">
			<h1>
				<a href="#{data.blocks[5].anchor}">{data.blocks[5].title}</a>
			</h1>
			<p>
				Типо отзывы
			</p>
		</div>
		<div id="{data.blocks[6].anchor}" class="col-12 mt-4">
			<h1>
				<a href="#{data.blocks[6].anchor}">{data.blocks[6].title}</a>
			</h1>
			<p>
				Типо отзывы
			</p>
		</div>
	</div>
</div>
<Footer/>
<style>
	h1 a {
		padding: 12px 0;
		display: block;
		text-align: center;
		color: black;
		text-decoration: none;
	}
	h1 a:focus {
		text-decoration: none;
	}

	ol {
		list-style: none;
		padding: 0;
		margin: 0;
		counter-reset: list-counter;
		margin-bottom: 26px;
		margin-top: 18px;
		margin-left: 12px;
	}
	li {
		padding: 0;
		position: relative;
		font-size: 16px;
		line-height: 24px;
		font-family: "adelle-sans",sans-serif;
		font-style: normal;
		font-weight: normal;
		color: #666;
	}
	ol li {
		position: relative;
		padding-left: 35px;
		min-height: 24px;
		margin-top: 14px;
	}
	ol li:before {
		content: counter(list-counter,decimal);
		counter-increment: list-counter;
		display: inline-block;

		position: absolute;
		top: 0;
		left: 0;
		width: 24px;
		height: 24px;
		text-align: center;
		line-height: 24px;
		font-family: "adelle-sans",sans-serif;
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		border-radius: 100%;
		color: #FFF;
		background: #88CE3D;
	}
</style>