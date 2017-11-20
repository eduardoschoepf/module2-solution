"use strict";

(function () {
        angular.module("ShoppingListCheckOff", [])
            .factory("ShoppingListCheckOffService", [ShoppingListCheckOffService])
            .controller("ToBuyController", ["ShoppingListCheckOffService", ToBuyController])
            .controller("AlreadyBoughtController", ["ShoppingListCheckOffService", AlreadyBoughtController]);

        function ToBuyController(ShoppingListCheckOffService) {
            var toBuy = this;
            toBuy.items = ShoppingListCheckOffService.getToBuyList();
            toBuy.addItem = function(name, quantity) {
                if(name && quantity && quantity > 0) {
                    ShoppingListCheckOffService.addItem(name, quantity);
                }
            }
        }

        function AlreadyBoughtController(ShoppingListCheckOffService) {
            var alreadyBought = this;
            alreadyBought.items = ShoppingListCheckOffService.getAlreadyBought();
        }

        function ShoppingListCheckOffService() {
            var toBuyList = [
                { name: "cookies", quantity: 10, boughtItem: boughtItem },
                { name: "yogurt", quantity: 5, boughtItem: boughtItem },
                { name: "cheese", quantity: 3, boughtItem: boughtItem },
                { name: "eggs", quantity: 24, boughtItem: boughtItem },
                { name: "milk", quantity: 6, boughtItem: boughtItem },
                { name: "bacon", quantity: 1, boughtItem: boughtItem },
                { name: "orange", quantity: 5, boughtItem: boughtItem },
                { name: "apple", quantity: 5, boughtItem: boughtItem },
                { name: "pears", quantity: 5, boughtItem: boughtItem }
            ];
            var alreadyBought = [];

            function getToBuyList() {
                return toBuyList;
            }

            function getAlreadyBought() {
                return alreadyBought;
            }

            function boughtItem(itemId) {
                alreadyBought.push(toBuyList[itemId]);
                toBuyList.splice(itemId, 1);
            }

            function addItem(name, quantity) {
                toBuyList.push({name: name, quantity: quantity, boughtItem: boughtItem});
            }

            return {
                getToBuyList: getToBuyList,
                getAlreadyBought: getAlreadyBought,
                addItem: addItem
            }
        }

    }
)();