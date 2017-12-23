var Animal = {
    createNew : function(){
        var animal = {};
        animal.sleep = function(){
            alert("Sleep a lot");
            return animal;
        }

    }
};

var Cat = {
    createNew : function(){
        var cat = Animal.createNew();
        cat.naming = "dog";
        cat.dosth = "scratch";
        return cat;
    }
};

var cat1 = Cat.createNew();
cat1.sleep();