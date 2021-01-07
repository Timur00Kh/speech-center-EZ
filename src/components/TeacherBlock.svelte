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
  import data from "../data";

  const teachers = [
    {
      name: 'Зайцева Эльвира Альбертовна',
      position: 'рук, лог-деф.',
      photo: t1
    },
    {
      name: 'Малафеева Анна Александровна',
      position: 'лог-деф.',
      photo: t2
    },
    {
      name: 'Фролова Галина Владимировна',
      position: 'лог-деф.',
      photo: t3
    },
    {
      name: 'Фахреева Гузель Равилевна',
      position: 'лог-деф.',
      photo: t4
    },
    {
      name: 'Игнатьева Елена Петровна',
      position: 'лог-деф.',
      photo: t5
    },
    {
      name: 'Абдрахманова Лилия Талгатовна',
      position: 'лог-деф.',
      photo: t6
    },
    {
      name: 'Хакимова Лилия Ильгизаровна',
      position: 'лог-деф.',
      photo: t7
    },
    {
      name: 'Назмеева Оксана Валерьевна',
      position: 'лог-деф.',
      photo: t8
    },
    {
      name: 'Дадаева Эльвира Фаатовна',
      position: 'лог-деф.',
      photo: t9
    },
  ]
</script>

<div id="{data.blocks[4].anchor}" class="col-12 mt-4">
    <h1>
        <a href="#{data.blocks[4].anchor}">{data.blocks[4].title}</a>
    </h1>
</div>

{#each teachers as teacher}
    <div class="col-md-4 col-lg-4 mt-2">
        <div class="card">
            <img src="{teacher.photo}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{teacher.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{teacher.position}</h6>
            </div>
        </div>
    </div>
{/each}

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
</style>