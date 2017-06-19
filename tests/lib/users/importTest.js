/* 
    All tests are working, but this code will be commented
    out to protect overwriting/deleting users. Only use this
    test if you understand the risks associated with it.
*/

/*
'use strict';

const expect = require('chai').expect;
const config = {
	host: 'redcap.uits.iu.edu',
	path: '/api/',
	token: process.env.REDCAP_API_KEY
}
const utils = require('../../../lib/utils')(config);

const importInfo = require('../../../lib/users/import.js');

describe('users#importInfo', function() {
	it('should be a function', function() {
		expect(importInfo).to.be.a('function');
	});

	var importFunc = importInfo(utils);

	it('should return a function', function() {
		expect(importFunc).to.be.a('function');
	});

	it('should return project info', function(done) {
        var data = [
            {
                "username": "ajunger",
                "email": "ajunger@iupui.edu",
                "firstname": "Alan",
                "lastname": "Unger",
                "expiration": "",
                "data_access_group": "",
                "data_access_group_id": "",
                "design": "1",
                "user_rights": "0",
                "data_access_groups": "0",
                "data_export": "1",
                "reports": "1",
                "stats_and_charts": "1",
                "manage_survey_participants": "1",
                "calendar": "1",
                "data_import_tool": "1",
                "data_comparison_tool": "1",
                "logging": "1",
                "file_repository": "1",
                "data_quality_create": "1",
                "data_quality_execute": "1",
                "api_export": "1",
                "api_import": "1",
                "mobile_app": "0",
                "mobile_app_download_data": "0",
                "record_create": "1",
                "record_rename": "0",
                "record_delete": "0",
                "lock_records_all_forms": "0",
                "lock_records": "0",
                "lock_records_customization": "0",
                "forms": {
                    "my_first_instrument": "1",
                    "adolescent_outcomes_questionnaire_parent_reported": "1",
                    "effective_transitional_care_checklist": "1"
                }
            },
            {
                "username": "evdawilt",
                "email": "evdawilt@umail.iu.edu",
                "firstname": "Evan",
                "lastname": "Wilt",
                "expiration": "",
                "data_access_group": "",
                "data_access_group_id": "",
                "design": "1",
                "user_rights": "0",
                "data_access_groups": "0",
                "data_export": "1",
                "reports": "1",
                "stats_and_charts": "1",
                "manage_survey_participants": "1",
                "calendar": "1",
                "data_import_tool": "1",
                "data_comparison_tool": "1",
                "logging": "1",
                "file_repository": "1",
                "data_quality_create": "1",
                "data_quality_execute": "1",
                "api_export": "1",
                "api_import": "1",
                "mobile_app": "0",
                "mobile_app_download_data": "0",
                "record_create": "1",
                "record_rename": "0",
                "record_delete": "0",
                "lock_records_all_forms": "0",
                "lock_records": "0",
                "lock_records_customization": "0",
                "forms": {
                    "my_first_instrument": "1",
                    "adolescent_outcomes_questionnaire_parent_reported": "1",
                    "effective_transitional_care_checklist": "1"
                }
            },
            {
                "username": "hilljh",
                "email": "hilljh@iupui.edu",
                "firstname": "James",
                "lastname": "Hill",
                "expiration": "",
                "data_access_group": "",
                "data_access_group_id": "",
                "design": "1",
                "user_rights": "1",
                "data_access_groups": "1",
                "data_export": "1",
                "reports": "1",
                "stats_and_charts": "1",
                "manage_survey_participants": "1",
                "calendar": "1",
                "data_import_tool": "1",
                "data_comparison_tool": "1",
                "logging": "1",
                "file_repository": "1",
                "data_quality_create": "1",
                "data_quality_execute": "1",
                "api_export": "1",
                "api_import": "1",
                "mobile_app": "0",
                "mobile_app_download_data": "1",
                "record_create": "1",
                "record_rename": "0",
                "record_delete": "0",
                "lock_records_all_forms": "0",
                "lock_records": "0",
                "lock_records_customization": "0",
                "forms": {
                    "my_first_instrument": "1",
                    "adolescent_outcomes_questionnaire_parent_reported": "1",
                    "effective_transitional_care_checklist": "1"
                }
            },
            {
                "username": "rjdeal",
                "email": "rjdeal@umail.iu.edu",
                "firstname": "Riley",
                "lastname": "Deal",
                "expiration": "",
                "data_access_group": "",
                "data_access_group_id": "",
                "design": "1",
                "user_rights": "0",
                "data_access_groups": "0",
                "data_export": "1",
                "reports": "1",
                "stats_and_charts": "1",
                "manage_survey_participants": "1",
                "calendar": "1",
                "data_import_tool": "1",
                "data_comparison_tool": "1",
                "logging": "1",
                "file_repository": "1",
                "data_quality_create": "1",
                "data_quality_execute": "1",
                "api_export": "1",
                "api_import": "1",
                "mobile_app": "0",
                "mobile_app_download_data": "0",
                "record_create": "1",
                "record_rename": "0",
                "record_delete": "0",
                "lock_records_all_forms": "0",
                "lock_records": "0",
                "lock_records_customization": "0",
                "forms": {
                    "my_first_instrument": "1",
                    "adolescent_outcomes_questionnaire_parent_reported": "1",
                    "effective_transitional_care_checklist": "1"
                }
            },
            {
                "uany data currently in the dictionarysername": "stevpatt",
                "email": "stevpatt@imail.iu.edu",
                "firstname": "Steven",
                "lastname": "Patterson",
                "expiration": "",
                "data_access_group": "",
                "data_access_group_id": "",
                "design": "1",
                "user_rights": "0",
                "data_access_groups": "0",
                "data_export": "1",
                "reports": "1",
                "stats_and_charts": "1",
                "manage_survey_participants": "1",
                "calendar": "1",
                "data_import_tool": "1",
                "data_comparison_tool": "1",
                "logging": "1",
                "file_repository": "1",
                "data_quality_create": "1",
                "data_quality_execute": "1",
                "api_export": "1",
                "api_import": "1",
                "mobile_app": "0",
                "mobile_app_download_data": "0",
                "record_create": "1",
                "record_rename": "0",
                "record_delete": "0",
                "lock_records_all_forms": "0",
                "lock_records": "0",
                "lock_records_customization": "0",
                "forms": {
                    "my_first_instrument": "1",
                    "adolescent_outcomes_questionnaire_parent_reported": "1",
                    "effective_transitional_care_checklist": "1"
                }
            }
        ]

		importFunc({data: JSON.stringify(data)}, function(err, res) {
			expect(err).to.be.null;
			expect(res).to.not.be.null;
			expect(res).to.be.a('number');
			done();
		});
	});
});
*/