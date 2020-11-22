<template>
  <div>
    <el-row>
      <div style="padding: 15px 0; font-size: 13px;">Цены</div>
      <div>
        <el-radio-group v-model="radio1" @change="handleClick">
          <el-radio-button label="Для клиента"></el-radio-button>
          <el-radio-button label="Для водителя"></el-radio-button>
        </el-radio-group>
      </div>
    </el-row>
    <el-row>
      <div style="padding: 15px 0; font-size: 13px;">Вид расчета</div>
      <div>
        <el-radio-group v-model="radio2" @change="handleClick">
          <el-radio-button label="По ставке"></el-radio-button>
          <el-radio-button label="По часам"></el-radio-button>
          <el-radio-button label="По точкам"></el-radio-button>
          <el-radio-button label="Км + мин"></el-radio-button>
          <el-radio-button label="Грузчики"></el-radio-button>
        </el-radio-group>
      </div>
    </el-row>
    <el-row>
      <div style="padding: 15px 0; font-size: 13px;">Тип будки</div>
      <div>
        <el-radio-group v-model="radio3" @change="handleClick">
          <el-radio-button label="Тент"></el-radio-button>
          <el-radio-button label="Промтовары"></el-radio-button>
          <el-radio-button label="Изотерма"></el-radio-button>
          <el-radio-button label="Реф"></el-radio-button>
        </el-radio-group>
      </div>
    </el-row>
    <div class="table">
      <el-row>
        <div style="padding: 15px 0; font-size: 13px;">Оптимальные цены</div>
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
          <el-table-column
              prop="date"
              align="center"
              label="Тоннаж ТС"
              width="100">
          </el-table-column>
          <el-table-column
              prop="name"
              align="center"
              label="Тип ТС"
              width="80">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Мин-но / мах часов в ставке">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Подача ТС">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Экспедир.">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Тариф по ставке">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Переработка за час">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Гидроборт">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Въезд ТТК, МОЖД">
          </el-table-column>
          <el-table-column align="center" label="Километраж за МКАД">
            <el-table-column
                prop="address"
                align="center"
                label="Границы">
            </el-table-column>
            <el-table-column
                prop="address"
                align="center"
                label="Стоимость">
            </el-table-column>
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Ручная разгрузка">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Перегруз">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Платная парковка">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Инкасация">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Водитель-Грузчик за час">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Водитель Грузчк время">
          </el-table-column>
        </el-table>
      </el-row>
      <el-row>
        <div style="padding: 15px 0; font-size: 13px; margin-top: 20px;">Минимально возможные цены</div>
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
          <el-table-column
              prop="date"
              align="center"
              label="Тоннаж ТС"
              width="100">
          </el-table-column>
          <el-table-column
              prop="name"
              align="center"
              label="Тип ТС"
              width="80">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Мин-но / мах часов в ставке">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Подача ТС">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Экспедир.">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Тариф по ставке">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Переработка за час">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Гидроборт">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Въезд ТТК, МОЖД">
          </el-table-column>
          <el-table-column align="center" label="Километраж за МКАД">
            <el-table-column
                prop="address"
                align="center"
                label="Границы">
            </el-table-column>
            <el-table-column
                prop="address"
                align="center"
                label="Стоимость">
            </el-table-column>
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Ручная разгрузка">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Перегруз">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Платная парковка">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Инкасация">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Водитель-Грузчик за час">
          </el-table-column>
          <el-table-column
              prop="address"
              align="center"
              label="Водитель Грузчк время">
          </el-table-column>
        </el-table>
      </el-row>
    </div>
    <el-divider></el-divider>
    <el-button class="button--save">
      Сохранить изменения
    </el-button>
  </div>
</template>
<script>
export default {
  name: 'Tariffs',
  data() {
    return {
      radio1: 'Для клиента',
      radio2: 'По часам',
      radio3: 'Тент',
      tableData: [],
      tableDataCopy: [{
        date: '2016-05-03',
        name: 'Александр',
        address: 'Москва'
      }, {
        date: '2016-05-02',
        name: 'Антон',
        address: 'Ленинград'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'Берлин'
      }, {
        date: '2016-05-01',
        name: 'Raul',
        address: 'Дамаск'
      }],
      newTableDataCopy: [{
        date: '2020-05-03',
        name: 'Евгений',
        address: 'Москва'
      }, {
        date: '2020-05-02',
        name: 'Александр',
        address: 'Ленинград'
      }, {
        date: '2020-05-04',
        name: 'Наталья',
        address: 'Берлин'
      }, {
        date: '2020-05-01',
        name: 'Софья',
        address: 'Дамаск'
      },{
        date: '2020-05-10',
        name: 'Нина',
        address: 'Омск'
      }],
      newTableDataCopy2: [{
        date: '2019-05-03',
        name: 'Арсаманян',
        address: 'Калуга'
      }, {
        date: '2019-05-02',
        name: 'Алмет',
        address: 'Астана'
      }, {
        date: '2019-05-04',
        name: 'Курнар',
        address: 'Париж'
      }, {
        date: '2019-05-01',
        name: 'Анатолий',
        address: 'Гаваи'
      },{
        date: '2019-05-10',
        name: 'Ахмед',
        address: 'Тундра'
      }],
      newTableDataCopy3: [{
        date: '2018-05-03',
        name: 'Таканян',
        address: 'Оренбург'
      }, {
        date: '2018-05-02',
        name: 'Хомит',
        address: 'Владивосток'
      }, {
        date: '2018-05-04',
        name: 'Михаил',
        address: 'Томск'
      }, {
        date: '2018-05-01',
        name: 'Светлана',
        address: 'Астана'
      },{
        date: '2018-05-10',
        name: 'Дурбас',
        address: 'грозный'
      }],
      newTableDataCopy4: [{
        date: '2017-05-03',
        name: 'Николая',
        address: 'Киев'
      }, {
        date: '2017-05-02',
        name: 'ольга',
        address: 'Амстердам'
      }, {
        date: '2017-05-04',
        name: 'Кухнай',
        address: 'Дейли'
      }, {
        date: '2017-05-01',
        name: 'Марк',
        address: 'Брянск'
      },{
        date: '2017-05-10',
        name: 'Нина',
        address: 'Люберцы'
      }]
    };
  },
  created() {
    this.tableData = this.tableDataCopy;
    this.handleClick('По часам')
  },
  methods: {
    handleClick(value) {
      switch(value) {
        case 'По ставке':
          this.tableData = this.tableDataCopy
          break
        case 'По часам':
          this.tableData = this.newTableDataCopy
          break
        case 'По точкам':
          this.tableData = this.newTableDataCopy2
          break
        case 'Км + мин':
          this.tableData = this.newTableDataCopy3
          break
        case 'Грузчики':
          this.tableData = this.newTableDataCopy4
          break
      }
    }
  }
};
</script>

<style>
  .table {
    margin-top: 20px;
  }
  .el-table {
    color: #000000;
  }
  .el-table thead {
    color: #000000;
  }
  .button--save {
    background-color: #F7EB70!important;
    border-radius: 44px!important;
    color: #000000!important;
    cursor: pointer;
    text-transform: none;
    height: 31px;
    line-height: 0;
  }
  .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 10px !important;
    border-left: 1px solid #595959;
    margin-left: 0;
  }
  .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 10px!important;
    margin-right: 0;
  }
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    color: #FFFFFF;
    background-color: #67C23A;
    border-color: #67C23A;
    box-shadow: -1px 0 0 0 #67C23A;
  }
  .el-radio-button__inner {
    border: 1px solid #595959;
    border-radius: 10px !important;
    margin: 0 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled) {
    box-shadow: unset;
  }


</style>
