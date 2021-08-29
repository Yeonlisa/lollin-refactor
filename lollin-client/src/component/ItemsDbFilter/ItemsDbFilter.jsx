import React from "react";
import { ItemsFilter, CheckBoxArea } from "./ItemsDbFilterStyled.jsx";


const ItemsDbFilter = ({
  itemsData,
  handleSortTags,
  handleItemSearchValue,
}) => {
  const dummyData = [...itemsData];
  const filterArr = [];

  dummyData.map((ele) => {
    for (let i = 0; i < ele[1].tags.length; i++) {
      if (filterArr.indexOf(ele[1].tags[i]) === -1) {
        filterArr.push(ele[1].tags[i]);
      }
    }
  });
  return (
    <ItemsFilter className="itemsFliter">
      <CheckBoxArea className="filterBox">
        <div className="filterText">물리 공격</div>
        <section>
          <div>
            <input
              type="checkbox"
              className="phsyAttack"
              onChange={(e) => handleSortTags(e.target.checked, "Damage", 0)}
            />
            <div htmlFor="phsyAttack">공격력</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="phsyAttack"
              onChange={(e) =>
                handleSortTags(e.target.checked, "CriticalStrike", 2)
              }
            />
            <div htmlFor="offensePower">치명타</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="phsyAttack"
              onChange={(e) =>
                handleSortTags(e.target.checked, "AttackSpeed", 3)
              }
            />
            <div htmlFor="offensePower">공격속도</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="phsyAttack"
              onChange={(e) => handleSortTags(e.target.checked, "LifeSteal", 4)}
            />
            <div htmlFor="offensePower">생명력 흡수</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="phsyAttack"
              onChange={(e) =>
                handleSortTags(e.target.checked, "ArmorPenetration", 5)
              }
            />
            <div htmlFor="offensePower">방어구 관통</div>
          </div>
        </section>
      </CheckBoxArea>
      <CheckBoxArea className="filterBox">
        <div className="filterText">주문력</div>
        <section>
          <div>
            <input
              type="checkbox"
              className="magicAttack"
              onChange={(e) =>
                handleSortTags(e.target.checked, "AbilityHaste", 6)
              }
            />
            <div htmlFor="magicAttack">스킬 가속</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="magicAttack"
              onChange={(e) => handleSortTags(e.target.checked, "SpellVamp", 7)}
            />
            <div htmlFor="magicAttack">주문 흡혈</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="magicAttack"
              onChange={(e) => handleSortTags(e.target.checked, "Mana", 8)}
            />
            <div htmlFor="magicAttack">마나</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="magicAttack"
              onChange={(e) => handleSortTags(e.target.checked, "ManaRegen", 9)}
            />
            <div htmlFor="magicAttack">마나 회복</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="magicAttack"
              onChange={(e) =>
                handleSortTags(e.target.checked, "MagicPenetration", 10)
              }
            />
            <div htmlFor="magicAttack">마법 관통</div>
          </div>
        </section>
      </CheckBoxArea>

      <CheckBoxArea className="filterBox">
        <div className="filterText">방어</div>
        <section>
          {" "}
          <div>
            <input
              type="checkbox"
              className="defense"
              onChange={(e) => handleSortTags(e.target.checked, "Health", 11)}
            />
            <div htmlFor="defense">체력</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="defense"
              onChange={(e) => handleSortTags(e.target.checked, "Armor", 12)}
            />
            <div htmlFor="defense">방어력</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="defense"
              onChange={(e) =>
                handleSortTags(e.target.checked, "SpellBlock", 13)
              }
            />
            <div htmlFor="defense">마법 저항력</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="defense"
              onChange={(e) =>
                handleSortTags(e.target.checked, "HealthRegen", 14)
              }
            />
            <div htmlFor="defense">체력 회복</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="defense"
              onChange={(e) => handleSortTags(e.target.checked, "Tenacity", 15)}
            />
            <div htmlFor="defense">강인함</div>
          </div>
        </section>
      </CheckBoxArea>
      <CheckBoxArea className="lastBox">
        <div className="filterText">기타</div>
        <section>
          <div>
            <input
              type="checkbox"
              className="etcItems"
              onChange={(e) => handleSortTags(e.target.checked, "Boots", 16)}
            />
            <div htmlFor="etcItems">신발</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="etcItems"
              onChange={(e) =>
                handleSortTags(e.target.checked, "NonbootsMovement", 17)
              }
            />
            <div htmlFor="etcItems">이동 속도</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="etcItems"
              onChange={(e) =>
                handleSortTags(e.target.checked, "Consumable", 18)
              }
            />
            <div htmlFor="etcItems">소모품</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="etcItems"
              onChange={(e) => handleSortTags(e.target.checked, "Active", 19)}
            />
            <div htmlFor="etcItems">사용 아이템</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="etcItems"
              onChange={(e) => handleSortTags(e.target.checked, "Vision", 20)}
            />
            <div htmlFor="etcItems">은신 감지</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="etcItems"
              onChange={(e) => handleSortTags(e.target.checked, "Aura", 21)}
            />
            <div htmlFor="etcItems">오오라</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="etcItems"
              onChange={(e) => handleSortTags(e.target.checked, "Slow", 22)}
            />
            <div htmlFor="etcItems">느려짐</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="etcItems"
              onChange={(e) => handleSortTags(e.target.checked, "GoldPer", 23)}
            />
            <div htmlFor="etcItems">골드획득</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="etcItems"
              onChange={(e) => handleSortTags(e.target.checked, "Vision", 24)}
            />
            <div htmlFor="etcItems">시야</div>
          </div>
          <div>
            <input
              type="checkbox"
              className="etcItems"
              onChange={(e) => handleSortTags(e.target.checked, "Trinket", 25)}
            />
            <div htmlFor="etcItems">장신구</div>
          </div>
        </section>
      </CheckBoxArea>
    </ItemsFilter>
  );
};

export default ItemsDbFilter;
