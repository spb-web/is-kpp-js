const assert = require('assert')
    , isKpp = require('./../isKpp.js');


describe('isKpp', function( ){
	describe('Отправка заведомо ложных значений', ( ) => {
		function makeTest( testData ) {
			it( `При передаче ${ testData.text } возвращает false`, function() {
			    assert.equal( false, isKpp( testData.value ));
			});
		};
		[
			{
				text: "булевое значение 'false'",
				value: false
			},
			{
				text: "булевое значение 'true'",
				value: true
			},
			{
				text: "пустого массива",
				value: [ ]
			},
			{
				text: "не пустого массива",
				value: [ 11, 22, 33 ]
			},
			{
				text: "объекта",
				value: { }
			},
			{
				text: "null",
				value: null
			},
			{
				text: "пустой строки",
				value: ""
			},
			{
				text: "нуля",
				value: 0
			}
		].forEach( ( data ) => {
			makeTest( data );
		} );
	} );
	describe('Отправка валидных кодов КПП', ( ) => {
		function makeTest( testData ) {
			it( `При передаче ${ testData } возвращает true`, function() {
			    assert.equal( true, isKpp( testData ));
			});
		};
		[
			'027301001',
			'998050001',
			'041101001',
			'165201001',
			'165901001',
			'220301001',
			'220401001',
			'220501001',
			'220901001',
			'222101001',
			'420501001',
			'226301001',
			'222201001'
		].forEach( ( data ) => {
			makeTest( data );
		} );
	} );


	describe('Отправка НЕ валидных кодов КПП', ( ) => {
		function makeTest( testData ) {
			it( `При передаче ${ testData } возвращает false`, function() {
			    assert.equal( false, isKpp( testData ));
			});
		};
		[
			'0',
			'1',
			'2200401001',
			'22004001',
			'12.12.123',
			'12.1212.12',
			'12.12.1212',
			'01.10.10.10'
		].forEach( ( data ) => {
			makeTest( data );
		} );
	} );
});