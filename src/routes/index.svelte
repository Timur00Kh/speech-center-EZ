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
	<meta name="description" content="Мы осуществляем комплексную разностороннюю поддержку детей, основанную на нейропсихологии, дефектологии, психологии, педагогике. Это означает, что при работе с Вашим ребенком мы используем комплексный междисциплинарный подход при оценке причин трудностей ребенка, включаем знания разных специалистов в разработку индивидуальной программы коррекционного развития (невролога, нейропсихолога, логопеда-дефектолога, психолога). Мы помогаем детям, кому не смогли помочь другие. Осуществляем олное сопровождение ребенка до результата. Мы придаем очень большое значение работе с родителями, как в форме семейных консультаций, так и в форме прямых эфиров на радиоканале, публикаций материалов в социальных сетях.">
	<meta property="og:url" content="TODO">
	<meta property="og:image" content="{data.logo}">
	<meta property="og:site_name" content="{data.title}">
</svelte:head>

<div class="container" style="max-width: 1000px; background-color: rgba(255,255,255, 0.85);">
	<div class="row">
		<div id="{data.blocks[0].anchor}" class="col-12 mt-4">
			<img class="rounded w-100" src="{data.blocks[0].photo}" alt="TODO">
			<h1 class="block-heading mt-4">
				<a href="#{data.blocks[0].anchor}">{data.blocks[0].title}</a>
			</h1>

			<h3>Мы проводим диагностику и осуществляем сопровождение детей с:</h3>
			<ol>
				<li>Задержкой речевого развития</li>
				<li>Задержкой психического развития</li>
				<li>Задержкой психо-речевого развития</li>
				<li>Синдромом дефицита внимания и гиперактивности</li>
				<li>Ранним детским аутизмом</li>
				<li>Неврозоподобными состояниями</li>
				<li>Нарушением поведения и трудностями в обучении</li>
			</ol>
		</div>
		<div id="{data.blocks[1].anchor}" class="col-12 mt-4">
			<img class="rounded w-100" src="{data.blocks[1].photo}" alt="TODO">
			<h1 class="block-heading mt-4">
				<a href="#{data.blocks[1].anchor}">{data.blocks[1].title}</a>
			</h1>

			<h3>Индивидуальная коррекционная работа включает в себя:</h3>
			<ol>
				<li>Занятия с психологами и нейропсихологами (индивидуальный подбор комплекса физических упражнений)</li>
				<li>Занятия с логопедом-дефектологом</li>
				<li>Телесно-ориентированную терапию</li>
				<li>Развивающие игры</li>
				<li>Нашими нейропсихологами проводятся занятия в группах и в диадах</li>
				<li>Кроме того, наш центр практикует онлайн формат нейропсихологических и логопедических занятий, консультаций с родителями</li>
			</ol>
		</div>
		<div id="{data.blocks[2].anchor}" class="col-12 mt-4">
			<img class="rounded w-100" src="{data.blocks[2].photo}" alt="TODO">
			<h1 class="block-heading mt-4">
				<a href="#{data.blocks[2].anchor}">{data.blocks[2].title}</a>
			</h1>

			<p>Речевой Центр был создан в 2017 году.</p>
			<p>Сейчас у нас работают 19 квалифицированных специалистов: нейропсихологов, психологов, логопедов-дефектологов, педагогов по дошкольной подготовке.</p>
			<p>Центр имеет два филиала в Казани, что позволяет родителям выбрать наиболее удобный вариант для занятий.</p>
			<p>Комплексность подхода обеспечивается сочетанием на каждом занятии индивидуальных и групповых методов когнитивной, двигательной, эмоционально - личностной коррекции и телесно-ориентированной терапии.</p>
			<p>На базе Центра проводятся круглые столы и встречи по обмену опытом со специалистами, работающими в области детской психологии и восстановительного обучения.</p>
			<p>Так же Речевой центр является базой практики Казанского инновационного университета КИУ им. В.Г. Тимирясова.</p>

		</div>

		<div id="{data.blocks[3].anchor}" class="col-12 mt-4">
			<img class="rounded w-100" src="{data.blocks[3].photo}" alt="TODO">
			<h1 class="block-heading mt-4">
				<a href="#{data.blocks[3].anchor}">{data.blocks[3].title}</a>
			</h1>
			<p>Мы осуществляем комплексную разностороннюю поддержку детей, основанную на нейропсихологии, дефектологии, психологии, педагогике.</p>
			<p>Это означает, что при работе с Вашим ребенком мы используем комплексный междисциплинарный подход при оценке причин трудностей ребенка, включаем знания разных специалистов в разработку индивидуальной программы коррекционного развития (невролога, нейропсихолога, логопеда-дефектолога, психолога).</p>
			<p>Мы помогаем детям, кому не смогли помочь другие. Осуществляем полное сопровождение ребенка до результата.</p>
			<p>Мы придаем очень большое значение работе с родителями, как в форме семейных консультаций, так и в форме прямых эфиров на радиоканале, публикаций материалов в социальных сетях.</p>
		</div>
		<TeacherBlock/>
		<div id="{data.blocks[5].anchor}" class="col-12 mt-4">
			<h1 class="block-heading">
				<a href="#{data.blocks[5].anchor}">{data.blocks[5].title}</a>
			</h1>
		</div>
		<div class="col-12">
			<div class="card">
				<div class="card-body">
					<blockquote class="blockquote mb-0">
						<p>Здравствуйте!</p>
						<p>
							Хочу выразить огромную благодарность Вашему центру и особенно Лилии Ильгизаровне! Адамка болтает так, что его не заткнуть, и меня с мужем это очень радует. В центр мы пришли практически молчунами, кроме слов «мама, дай, папа» больше ничего не знали. Обещали, что за 5 месяцев ребёнок начнет говорить, а в итоге он заговорил уже к концу второго! Теперь на детских площадках родители постоянно спрашивают сколько Адамке лет, он разговаривает лучше некоторых четырёхлеток! Всем рекомендую только Ваш языковой центр!
						</p>
						<p>Удачи Вам и процветания!</p>
						<footer class="blockquote-footer">Ольга</footer>
					</blockquote>
				</div>
			</div>
		</div>
		<div class="col-12 mt-2">
			<div class="card">
				<div class="card-body">
					<blockquote class="blockquote mb-0">
						<p>Доброе утро!</p>
						<p>
							Хотела поблагодарить Вас за старания и терпение. Очень рада‚ что мы попали к Вам. Вы помогли Тимуру заговорить, это было для меня большой радостью. Когда он не разговаривал, за спиной говорили всякие гадости. Теперь он говорит не хуже других. В этом году мы пришли ставить звуки. И вы снова помогли нам. Спасибо нашему педагогу Лилии Талгатовне. Сколько она вложила сил и терпения!
						</p>
						<p>Очень вам благодарны! Теперь к вам перед школой придем!</p>
						<footer class="blockquote-footer">Оксана</footer>
					</blockquote>
				</div>
			</div>
		</div>
		<div class="col-12 mt-2">
			<div class="card">
				<div class="card-body">
					<blockquote class="blockquote mb-0">
						<p>Добрый день!</p>
						<p>
							Я бы хотела выразить огромную благодарность Вашему речевому центру. Эльвира Альбертовна, спасибо Вам огромное за то, что Вы делаете. Вы помогли моей дочери заговорить. Отдельная благодарность Татьяне Александровне за ее чуткое отношение к моему ребенку, дочка очень полюбила её и бежала на занятия с огромной радостью. Вы делаете огромное дело, помогаете детям не только говорить, но и понимать то, что они говорят, что говорят им, осознавать действия, которые они совершают. Я желаю Вашему центру процветания, огромных успехов и побед во всех начинаниях!
						</p>
						<p>Очень благодарна Вашему центру!</p>
						<footer class="blockquote-footer">Екатерина</footer>
					</blockquote>
				</div>
			</div>
		</div>


		<div id="{data.blocks[6].anchor}" class="col-12 mt-4">
			<h1 class="block-heading">
				<a href="#{data.blocks[6].anchor}">{data.blocks[6].title}</a>
			</h1>
		</div>
		<Footer/>
	</div>
</div>
<style>
	.blockquote p {
		font-size: 1rem;
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