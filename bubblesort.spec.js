describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('returns the same array', function(){
        var arr = [10,2,4,2]
        expect( bubbleSort(arr) ).toEqual(arr);
    });

    // it('returns an array with the same length as the original array', function(){
    //     var arr = [6,8,3,6,6];
    //     expect( bubbleSort(arr) ).toEqual([1]);
    // });

    it('handles an array with a single item', function(){
        var arr = [1];
        expect( bubbleSort(arr) ).toEqual([1]);
    });

    it('properly handles string in array format', function(){
        var arr = "[4,2,9,0]";
        expect( bubbleSort(arr) ).toEqual([0,2,4,9]);
    });

    it('properly handles string of integers', function(){
        var arr = "4,2,9,0";
        expect( bubbleSort(arr) ).toEqual([0,2,4,9]);
    });


});
