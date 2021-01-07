<script>
  import t1 from 'images/teachers/1.jpg';
  import t2 from 'images/teachers/2.jpg';
  import t3 from 'images/teachers/3.jpg';
  import t4 from 'images/teachers/4.jpg';
  import t5 from 'images/teachers/5.jpg';
  import t6 from 'images/teachers/6.jpg';
  import t7 from 'images/teachers/7.jpg';
  import t8 from 'images/teachers/8.jpg';
  import t9 from 'images/teachers/9.jpg';
  import t10 from 'images/teachers/10.jpg';
  import t11 from 'images/teachers/11.jpg';
  import t12 from 'images/teachers/12.jpg';
  import data from "../data";

  const teachers = [
    {
      name: 'Зайцева Эльвира Альбертовна',
      position: 'руководитель, логопед-дефектолог, кандидат педагогических наук',
      photo: t1
    },
    {
      name: 'Хакимова Лилия Ильгизаровна',
      position: 'логопед-дефектолог',
      photo: t2
    },
    {
      name: 'Назмеева Оксана Валерьевна',
      position: 'логопед-дефектолог',
      photo: t3
    },
    {
      name: 'Абдрахманова Лилия Талгатовна',
      position: 'логопед-дефектолог',
      photo: t4
    },
    {
      name: 'Вафина Лилия Наилевна',
      position: 'логопед-дефектолог',
      photo: t5
    },
    {
      name: 'Прокофьева Ульяна Николаевна',
      position: 'логопед-дефектолог',
      photo: t6
    },
    {
      name: 'Хамидуллина Фануза Фаридовна',
      position: 'логопед-дефектолог',
      photo: t7
    },
    {
      name: 'Фахреева Гузель Равилевна',
      position: 'логопед-дефектолог',
      photo: t8
    },
    {
      name: 'Осипова Ксения Витальевна',
      position: 'логопед-дефектолог',
      photo: t9
    },
    {
      name: 'Валеева Диляра Ильгизовна',
      position: 'нейропсихолог',
      photo: t10
    },
    {
      name: 'Яхина Лейля Масгутовна',
      position: 'администратор',
      photo: t11
    },
    {
      name: 'Абдеева Алина Радиковна',
      position: 'администратор',
      photo: t12
    },
  ]
</script>

<div id="{data.blocks[4].anchor}" class="col-12 mt-4">
    <h1 class="block-heading">
        <a href="#{data.blocks[4].anchor}">{data.blocks[4].title}</a>
    </h1>
</div>

{#each teachers as teacher}
    <div class="col-6 col-md-4 col-lg-4 mt-2">
        <div class="card">
            <img style="" src="{teacher.photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{teacher.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{teacher.position}</h6>
            </div>
        </div>
    </div>
{/each}

<div class="w-100"/>

<div class="col-12 mt-2">
    <div class="row justify-content-center">
        <div class="col-sm-10 col-md-6">
            <ol style="counter-reset: list-counter 12">
                <li><strong>Малафеева Анна Александровна</strong> <span class="badge badge-light">логопед-дефектолог</span></li>
                <li><strong>Фролова Галина Владимировна</strong> <span class="badge badge-light">логопед-дефектолог</span></li>
                <li><strong>Игнатьева Елена Петровна</strong> <span class="badge badge-light">логопед-дефектолог</span></li>
                <li><strong>Дадаева Эльвира Фаатовна</strong> <span class="badge badge-light">логопед-дефектолог</span></li>
                <li><strong>Давыдова Татьяна Александровна</strong> <span class="badge badge-light">логопед-дефектолог</span></li>
<!--                <li><strong>Валеева Диляра Ильгизовна</strong> <span class="badge badge-light">нейропсихолог</span></li>-->
            </ol>
        </div>
        <div class=" col-sm-10 col-md-6">
            <ol style="counter-reset: list-counter 17">
                <li><strong>Шагивалеева Алиса Анатольевна</strong> <span class="badge badge-light">нейропсихолог</span></li>
                <li><strong>Латыпова Зинира Равильевна</strong> <span class="badge badge-light">нейропсихолог</span></li>
                <li><strong>Халитова Татьяна Владимировна</strong> <span class="badge badge-light">нейропсихолог</span></li>
                <li><strong>Шелихова Виктория Юрьевна</strong> <span class="badge badge-light">учитель по подготовке к школе</span></li>
<!--                <li><strong>Абдеева Алина Радиковна</strong> <span class="badge badge-light">администратор</span></li>-->
            </ol>
        </div>
    </div>
</div>

<div class="w-100"/>

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