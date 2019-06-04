/* tslint:disable */
export interface Language {
    // GENERAL VARIABLES
    readonly LANGUAGE_ISO: string;
    // Utils
    add: string
    administrative_settings: string
    back: string
    beneficiaries: string
    beneficiary: string
    cancel: string
    characters: string
    close: string
    complete: string
    create: string
    delete: string
    details: string
    description: string
    distribution: string
    distributions: string
    done: string
    email: string
    export: string
    booklet_export_codes: string
    female: string
    male: string
    gender: string
    general_settings: string;
    home: string
    households: string
    language: string
    id: string
    import: string
    individual: string
    is_required: string
    location: string
    name: string
    new: string
    next: string
    no_data: string
    phone: string
    project: string
    projects: string
    reports: string
    rights: string
    save: string
    settings: string
    summary: string
    this: string
    the: string
    update: string
    voucher: string

    // Error
    back_to_homepage: string
    error_interceptor_msg: string
    forbidden: string
    forbidden_message: string
    not_connected_error: string
    not_found: string
    not_found_message: string

    // Months
    months_short: Array<string>


    // SPECIFIC VARIABLES

    // Address and location
    adm1: object
    adm2: object
    adm3: object
    adm4: object
    address: string
    address_number: string
    address_postcode: string
    address_street: string

    // Add beneficiary
    add_beneficiary_done: string
    add_beneficiary_step1: string
    add_beneficiary_step2: string
    add_beneficiary_step3: string
    add_beneficiary_title: string
    
    // Add distribution
    add_distribution_advanced_option: string
    add_distribution_beneficiaries_reached: string
    add_distribution_check_date: string
    add_distribution_check_fields: string
    add_distribution_commodities_delivered: string
    add_distribution_created: string
    add_distribution_date_inside_project: string
    add_distribution_distributed_commodity: string
    add_distribution_error_creating: string
    add_distribution_households_reached: string
    add_distribution_missing_commodity: string
    add_distribution_missing_date: string
    add_distribution_missing_location: string
    add_distribution_missing_selection_criteria: string
    add_distribution_missing_threshold: string
    add_distribution_multiple_modalities: string
    add_distribution_no_beneficiaries: string
    add_distribution_selection_criteria: string
    add_distribution_text_explanation: string
    add_distribution_threshold: string
    add_distribution_zero: string

    // Add project
    add_project_title: string
    add_project_new_distribution: string

    // Beneficiaries
    beneficiaries_add_distribution: string
    beneficiaries_add_list: string
    beneficiaries_add_project: string
    beneficiaries_added: string
    beneficiaries_advanced_research: string
    beneficiaries_clear_all_research: string
    beneficiary_date_of_birth: string
    beneficiary_en_family_name: string
    beneficiary_en_given_name: string
    beneficiaries_en_name: string
    beneficiaries_head: string
    beneficiary_local_family_name: string
    beneficiary_local_given_name: string
    beneficiaries_local_name: string
    beneficiaries_member: string
    beneficiaries_missing_selected_project: string
    beneficiaries_personnal: string
    beneficiaries_referral: string
    beneficiaries_referral_question: string
    beneficiaries_referral_type: string
    beneficiaries_referral_types: object
    beneficiaries_referral_comment: string
    beneficiary_res_address: string
    beneficiaries_residency: string
    beneficiaries_beneficairy_residency_status_refugee: string
    beneficiaries_beneficairy_residency_status_idp: string
    beneficiaries_beneficairy_residency_status_resident: string
    beneficiaries_select_api: string
    beneficiaries_selected_project: string
    
    // Benficiary form errors
    beneficiary_error_location: string
    beneficiairy_error_address_number: string
    beneficiary_error_address_postcode: string
    beneficiary_error_address_street: string
    beneficiairy_error_head: string
    beneficiary_error_member: string
    beneficiary_error_family_name: string
    beneficiary_error_given_name: string
    beneficiairy_error_gender: string
    beneficiary_error_phone: string
    beneficiary_error_existing_country_code: string
    beneficiary_error_country_code: string
    beneficiairy_error_birth_date: string
    beneficiairy_error_project: string
    
    // Beneficiary import
    beneficiaries_import_addFile: string
    beneficiaries_import_addModal: string
    beneficiaries_import_api: string
    beneficiaries_import_beneficiaries_imported: string
    beneficiaries_import_canceled: string
    beneficiaries_import_check_fields: string
    beneficiaries_import_csv: string
    beneficiaries_import_convert: string
    beneficiaries_import_conversion_success: string
    beneficiaries_import_error_file: string
    beneficiaries_import_error_importing: string
    beneficiaries_import_error_selection: string
    beneficiaries_import_file: string
    beneficiaries_import_response: string
    beneficiaries_import_select_location: string
    beneficiaries_import_select_project: string
    beneficiaries_import_title: string
    beneficiaries_import_warning: string
    
    // Cache
    cache_distribution_added: string
    cache_store_beneficiaries: string
    cache_stored_beneficiaries: string
    cache_no_distribution: string

    // Commodities
    commodity_cash: string
    commodity_qr_voucher: string
    commodity_paper_voucher: string
    commodity_bread: string
    commodity_loan: string
    commodity_food: string
    commodity_wash: string
    commodity_agriculture: string
    commodity_rte: string
    commodity_shelter: string
    commodity_hygiene: string
    commodity_dignity: string
    commodity: string
    commodity_kgs: string
    commodity_kit: string
    commodity_modality: string
    commodity_unit: string
    commodity_value: string

    // Countries
    country_khm: string
    country_syr: string
    
    // Dashboard
    dashboard_distribution_map: string
    dashboard_recent_distributions: string
    dashboard_summary: string
    dashboard_summary_1: string
    dashboard_summary_2: string
    dashboard_summary_3: string
    dashboard_summary_4: string
    dashboard_summary_5: string
    dashboard_summary_6: string
    
    // Data verification
    data_verification_chip_actual: string
    data_verification_chip_add: string
    data_verification_chip_existing: string
    data_verification_chip_remove: string
    data_verification_description_duplicates: string
    data_verification_description_less: string
    data_verification_description_more: string
    data_verification_description_typos: string
    data_verification_description_end: string
    data_verification_done: string
    data_verification_error: string
    data_verification_just_now: string
    data_verification_last_updated: string
    data_verification_snackbar_duplicate_corrected: string
    data_verification_snackbar_duplicate_no_corrected: string
    data_verification_snackbar_less_corrected: string
    data_verification_snackbar_more_corrected: string
    data_verification_snackbar_typo_corrected: string
    data_verification_snackbar_typo_no_corrected: string
    data_verification_step_info: string
    data_verification_step_duplicates: string
    data_verification_step_less: string
    data_verification_step_more: string
    data_verification_step_typos: string
    data_verification_title: string
    
    // Distribution
    distribution_accept_changed: string
    distribution_add_beneficiaries: string
    distribution_beneficiary_added: string
    distribution_beneficiary_not_added: string
    distribution_cant_update: string
    distribution_details_export: string
    distribution_details_import: string
    distribution_details_random: string
    distribution_details_sample_size: string
    distribution_details_validate: string
    distribution_distribute: string
    distribution_edit: string
    distribution_error_validate: string
    distribution_no_beneficiaries: string
    distribution_no_random_sample: string
    distribution_no_right_transaction: string
    distribution_no_right_validate: string
    distribution_no_valid_commodity: string
    distribution_not_modified: string
    distribution_not_validated: string
    distribution_request_logs: string
    distribution_select_beneficiaries: string
    distribution_show_data: string
    distribution_validate: string
    distribution_validated: string
    distribution_validated_title: string
    distribution_want_add: string
    
    // Header
    'header_add-beneficiaries': string
    'header_add-distribution': string
    'header_admin': string
    header_beneficiaries: string
    header_disconnect: string
    'header_distributions': string
    'header_data-validation': string
    'header_settings': string
    header_home: string
    header_import: string
    header_imported: string
    header_language: string
    header_profile: string
    header_projects: string
    header_reports: string
    'header_update-beneficiary': string
    header_vouchers: string
    
    // Household
    household_location: string
    household_full_address: string
    household_info: string
    household_livelihood: string
    household_income: string
    household_income_level: object
    
    // Import
    import_added: string
    import_back_to_beneficiaries: string
    import_back_to_project: string
    import_created: string
    import_deleted: string
    import_description: string
    import_distribution_no_right_update: string
    import_distribution_updated: string
    import_select_new: string
    import_select_old: string
    import_updated: string
    
    // Livelihoods
    livelihood_livestock: string
    livelihood_crops: string
    livelihood_fishing: string
    livelihood_agriculture_other: string
    livelihood_mining: string
    livelihood_construction: string
    livelihood_manufacturing: string
    livelihood_retail: string
    livelihood_transportation: string
    livelihood_education: string
    livelihood_health: string
    livelihood_tourism: string
    livelihood_legal: string
    livelihood_home: string
    livelihood_religious: string
    livelihood_telecom: string
    livelihood_finance: string
    livelihood_manual: string
    livelihood_ngo: string
    livelihood_military: string
    livelihood_government: string
    livelihood_garment: string
    livelihood_security: string
    livelihood_service: string
    livelihood_other: string
    
    // Login
    login_bms: string
    login_captcha_invalid: string
    login_forgot_password: string
    login_password: string
    login_prompt: string
    login_title: string
    login_username: string
    
    // Modal
    modal_add_bad_weight: string
    modal_add_check_fields_budget: string
    modal_add_check_fields_quantity: string
    modal_add_fail_criteria: string
    modal_add_no_value: string
    modal_add_title: string
    modal_add_multiple_title: string
    modal_check_date: string
    modal_check_fields: string
    modal_delete_many: string
    modal_complete_distribution: string
    modal_delete_sentence: string
    modal_delete_sentence_2: string
    modal_details_title: string
    modal_edit_title: string
    modal_failure: string
    modal_leave: string
    modal_language_actual: string
    modal_leave_sentence: string
    modal_not_enough_strong: string
    modal_pending_requests: string
    modal_pick_color: string
    modal_required: string
    modal_save_language_as_default: string
    modal_success: string
    modal_valid_email: string
    modal_warning_pending_requests_1: string
    modal_warning_pending_requests_2: string
    modal_no_file: string
    modal_values_format_error: string
    
    // National ID
    national_id_type: string
    national_id: string
    national_id_number: string

    // Phone
    phone_proxy: string
    phone_type: string
    phone_prefix: string
    phone_no: string

    // Model
    household_dependents: string
    household_sentence: string

    beneficiary_status: string
    beneficiary_family_name: string
    beneficiary_given_name: string
    beneficiary_residency_status: string
    beneficiary_vulnerabilities: string

    booklet: string
    booklet_password_pattern: string
    booklet_code: string
    booklet_deactivated: string
    booklet_define_password: string
    booklet_update_password: string
    booklet_individual_value: string
    booklet_number_booklets: string
    booklet_number_vouchers: string
    booklet_unassigned: string
    booklet_used: string
    
    countryIso3: string
    country_specific: string
    country_specific_field: string

    criteria: string
    criteria_operator: string
    criteria_weight: string

    currency: string
    distributed: string
    duplicate: string
    general_relief: string
    notes: string
    sector: string
    status: string
    type: string
    value: string
    password: string

    distribution_date: string
    distribution_type: string

    donor: string
    donor_fullname: string
    donor_shortname: string

    organization_name: string
    organization_logo: string
    organization_font: string
    organization_primary: string
    organization_secondary: string
    organization_footer: string

    product_name: string
    product_unit: string
    product_image: string

    project_end_date: string
    project_name: string
    project_number_of_households: string
    project_start_date: string
    project_value: string
    project_sectors_name: string

    transaction_message: string
    transaction_pickupDate: string

    vendor: string
    vendor_type_shop: string

    user: string
    user_password_question: string
    
    // Add beneficiary options
    national_id_passport: string
    national_id_card: string
    national_id_license: string
    national_id_family_registry: string
    national_id_other: string

    // Null values
    null_none: string
    null_not_yet: string
    null_not_distributed: string
    null_not_yet_defined: string

    // Number suffixes
    number_suffix_first: string
    number_suffix_second: string
    number_suffix_third: string
    number_suffix_other: string

    // Phone
    phone_type_landline: string
    phone_type_mobile: string

    // Placeholder
    placeholder_one_many: string

    // Profile
    profile_change_password: string
    profile_user_change_password: string
    profile_user_hint_new_password: string
    profile_user_hint_new_password_again: string
    profile_user_hint_old_password: string
    profile_user_information: string
    profile_password_would_not_be_changed: string

    // Project
    project_add: string
    project_add_household: string
    project_click: string
    project_create: string
    project_description: string
    project_go_import_beneficiaries: string
    project_no_distribution: string
    project_no_household: string
    project_no_projects: string

    // Report
    report_apply: string
    report_country: string
    report_country_report: string
    report_distribution_report: string
    report_filter_chose_periode: string
    report_filter_per_month: string
    report_filter_per_quarter: string
    report_filter_per_year: string
    report_frequency_month: string
    report_frequency_quarter: string
    report_frequency_year: string
    report_from: string
    report_loader: string
    report_period_selected: string
    report_project: string
    report_project_report: string
    report_select_frequency: string
    report_to: string
    report_upcoming_reporting: string

    // Role
    role_user_admin: string
    role_user_country_manager: string
    role_user_field_officer: string
    role_user_project_manager: string
    role_user_project_officer: string
    role_user_regional_manager: string

    // Beneficiary residency status
    beneficairy_residency_status_resident: string
    beneficairy_residency_status_refugee: string
    beneficairy_residency_status_idp: string

    // Sectors tooltips
    sector_cccm: string
    sector_recovery: string
    sector_education: string
    sector_telecom: string
    sector_food: string
    sector_health: string
    sector_logistics: string
    sector_nutrition: string
    sector_protection: string
    sector_shelter: string
    sector_water: string
    sector_cash_for_work: string
    sector_tvet: string
    sector_food_kits: string
    sector_nfi: string

    // Settings
    settings_country_specific_options: string
    settings_created: string
    donors: string
    settings_financial_provider: string
    settings_log_button: string
    settings_organization: string
    settings_print_starting: string
    settings_product: string
    settings_project_exists: string
    settings_users: string
    settings_vendors: string

    // Snackbar
    snackbar_change_password_done: string
    snackbar_change_password_fail: string
    snackbar_change_password_not_possible: string
    snackbar_invalid_transaction_date: string
    snackbar_pickup_error: string

    // Table
    table_actions: string
    table_element_deleted: string
    table_element_updated: string
    table_filter: string
    table_first_page: string
    table_items_per_page: string
    table_last_page: string
    table_next_page: string
    table_of_page: string
    table_previous_page: string

    // Transaction
    transaction_accept_prevention: string
    transaction_again: string
    transaction_amount_distributed: string
    transaction_amount_done: string
    transaction_amount_total: string
    transaction_amount_used: string
    transaction_amount_waiting: string
    transaction_confirm: string
    transaction_confirm_button: string
    transaction_email_code: string
    transaction_id_transaction: string
    transaction_info_export: string
    transaction_inProgress: string
    transaction_paste_code: string
    transaction_prevention: string
    transaction_progress: string
    transaction_refresh: string
    transaction_state_not_sent: string
    transaction_state_no_phone: string
    transaction_state_sending_failed: string
    transaction_state_sent: string
    transaction_state_already_sent: string
    transaction_state_picked_up: string

    transaction_transaction: string
    transaction_validate_distribution: string
    transaction_validation: string
    transaction_no_transaction_sent: string

    // Tooltip
    tooltip_dashboard: string

    // Update beneficiary
    update_beneficiary_created_successfully: string
    update_beneficiary_error_creating: string
    update_beneficiary_error_updated: string
    update_beneficiary_title: string
    update_beneficiary_updated_successfully: string

    //Vouchers
    voucher_ask_code: string
    voucher_assign: string
    voucher_assign_title: string
    voucher_assigned_success: string
    voucher_confirm: string
    voucher_created: string
    voucher_define_password: string
    voucher_for: string
    voucher_no_device: string
    voucher_no_permission: string
    voucher_only_digits: string
    voucher_password_changed: string
    voucher_scan_text: string
    voucher_select_project: string
    voucher_select_distribution: string
    voucher_select_beneficiary: string
    voucher_step5: string
    voucher_print_selection: string
    voucher_print_error: string
    voucher_print_starting: string

    // Vulnerability
    vulnerability_pregnant: string
    vulnerability_disabled: string
    vulnerability_lactating: string
    vulnerability_solo_parent: string
    vulnerability_nutrional: string

    // User
    user_only_one_country: string

}
