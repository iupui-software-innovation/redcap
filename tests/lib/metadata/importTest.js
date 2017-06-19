/* 
    When testing import, ALWAYS make a snapshot of the current
    data dictionary before importing to prevent data loss. All
    tests are working, but this code will be commented out to
    protect any data currently in the dictionary.
*/

/*
'use strict';

const expect = require('chai').expect;
const importInfoModule = require('../../../lib/metadata/import.js');

const config = {
	host: 'redcap.uits.iu.edu',
	path: '/api/',
	token: process.env.REDCAP_API_KEY
}

const utils = require('../../../lib/utils')(config);

describe('metadata#import', function() {
	it('should be a function', function() {
		expect(importInfoModule).to.be.a('function');
	});

	const importInfo = importInfoModule(utils);

	it('should return a function', function() {
		expect(importInfo).to.be.a('function');
	});

	it('should provide an error if no values are passed', function(done) {
		importInfo({data:{}}, function(err, res) {
			expect(err).to.be.an('object').that.has.property('error');
			expect(res).to.be.null;
			done();
		});
	});

	describe('should return the number of values updated', function() {
		it('for 1 update', function(done) {
            // Please put the most recent metadata here when testing this
			var data = [
                {"field_name":"record_id","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"text","field_label":"Record ID","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_monitor","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice monitor the patient's care during the inpatient stay and collaborate with the\r\ninpatient team as appropriate?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_schedule","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice schedule a follow-up visit to see the patient within one week of discharge?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_follow_up_visit_i","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"checkbox","field_label":"Does the follow up visit include the following elements:","select_choices_or_calculations":"0, complete a history of problems or questions since discharge | 1, review of discharge summary and recommendations | 2, review of reason for admission\/ER visit and discussion of ways to avoid inpatient stays and ER visits | 3, medication reconciliation | 4, functional status assessment | 5, cognitive impairment assessment (MMSE) | 6, delirium assessment [Confusion Assessment Method (CAM)]","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_have_a_p","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice have a process for identifying and engaging patients' informal caregivers when\r\nnecessary and appropriate?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_follow_u","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice follow-up with the patient and, if appropriate, his\/her informal caregiver for at\r\nleast six months post discharge through phone calls and\/or office visits?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_provide","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice provide education (such as face-to- face coaching, brochures, videotapes, etc.)\r\nfor patients with a chronic disease and, if appropriate, their informal caregivers?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_this_education_help","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"checkbox","field_label":"Does this education:","select_choices_or_calculations":"0, help patients and their informal caregivers to better understand the disease? | 1, teach skills that help patients and their informal caregivers to better manage the disease? | 2, include information about cognitive impairment and its impact on medication adherence and management of other chronic diseases?","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_offer_24","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice offer 24\/7 telephone availability for patients to speak with a clinician?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_apply_ca","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice apply care coordination across multiple providers, disciplines, settings and community resources? Examples could include, but are not limited to:\r\n\r\no Utilizing an interdisciplinary team to provide patient care\r\n\r\no Written reports sent to other healthcare professionals providing care to the patient\r\n\r\no Collaboration between primary care physicians and specialists\r\n\r\no Collaboration between healthcare professionals in the outpatient clinic and hospital settings\r\n\r\no Connecting the patient and informal caregiver with resources in the community","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_work_wit","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice work with a pharmacist to correct patient misinformation and lack of understanding about their medications?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"work_with_pharmacist","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice work with a pharmacist to provide precise medication adjustments for patients?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"to_improve_medication","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice work with a pharmacist to improve medication adherence?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_have_2","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice have a procedure for documenting patient preferences?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_incorpor","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice incorporate these preferences in the patient's care plan?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_strive_t","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice strive to pair the patient with the same healthcare professional from the beginning to the end of their treatment?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"does_the_practice_educate","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"checkbox","field_label":"Does the practice educate patients about self-care and resource use by:","select_choices_or_calculations":"0, Encouraging patients to be more aware of and to pay attention to symptoms, and to contact their primary care physician for non-emergencies? | 1, Encouraging patients to be more aware of and to pay attention to symptoms, and to present at the emergency department if they experience symptoms that could potentially be life threatening?","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"adequate_funding","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice provide for the support of a transitional care model through adequate funding?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"business_model","form_name":"effective_transitional_care_checklist","section_header":"","field_type":"yesno","field_label":"Does the practice provide for the support of a transitional care model through a business model?","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""},
                {"field_name":"testfile","form_name":"test_followup_survey","section_header":"","field_type":"file","field_label":"Test file upload","select_choices_or_calculations":"","field_note":"","text_validation_type_or_show_slider_number":"","text_validation_min":"","text_validation_max":"","identifier":"","branching_logic":"","required_field":"y","custom_alignment":"","question_number":"","matrix_group_name":"","matrix_ranking":"","field_annotation":""}
            ]
			importInfo({data: JSON.stringify(data)}, function(err, res) {
                console.log(err);
				expect(err).to.be.null;
				expect(res).to.be.a('number');
				done();
			});
		});
	});
});
*/