$(function validate() {
	$("#add-form").validate({
		rules: {
			name: {
				required: true,
				minlength: 1,
				maxlength: 256,
				specialchars: true
			},
			salary: {
				required: true,
				minlength: 1,
				maxlength: 10,
				chars: true
			}
		},
		messages: {
			name: {
				required: "Името е задължително поле.",
				minlength: "Моля въведете поне 1 символ.",
				maxlength: "Моля въведете най-много 256 символа.",
				specialchars: "Моля въведете само букви."
			},
			salary: {
				required: "Заплатата е задължително поле.",
				minlength: "Моля въведете поне 1 символ.",
				maxlength: "Моля въведете най-много 10 символа.",
				chars: "Моля въведете само цифри."
			}
		}
	});

	jQuery.validator.addMethod("specialchars", function (value, element) {
		return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
	}, "Само букви.");
	jQuery.validator.addMethod("chars", function (value, element) {
		return this.optional(element) || /^[0-9]+$/i.test(value);
	}, "Само цифри.");
});