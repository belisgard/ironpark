// Mock Data for B2P Platform Prototype

const mockData = {
  cars: [
    { 
      id: 1, 
      plate: 'А123БВ777', 
      brand: 'Toyota', 
      model: 'Camry', 
      vin: 'JTNBF4HKXJ1234567', 
      sts: '77СТ123456', 
      status: 'На линии', 
      currentDriver: 'Иванов Иван Иванович', 
      mileage: 125000, 
      category: 'Эконом', 
      curator: 'Петров П.П.', 
      hasFines: true, 
      insuranceExpiringDays: 45, 
      hasDebt: false,
      // Дополнительные поля
      year: 2020,
      bodyColor: 'Белый',
      code: '',
      department: 'Подразделение 1',
      organization: 'ООО «МЕГА»',
      lessor: 'ООО «МЕГА»',
      // Доп. характеристики
      transmissionType: 'АКПП',
      driveType: '',
      bodyNumber: 'JTNBF4HKXJ1234567',
      unladenMass: null,
      maxMass: null,
      engineNumber: 'HFC4GB24DP3385741',
      engineDisplacement: 2498.0,
      enginePower: 181.00,
      fuelType: 'АИ-95',
      ecologicalClass: '5',
      interiorType: 'Комбинированный',
      // Свидетельство о регистрации
      stsSeries: '77СТ',
      stsNumber: '123456',
      stsIssueDate: '2020-01-15',
      stsValidUntil: null,
      stsRegistrationDate: '2020-01-15',
      stsIssuedBy: 'МРЭО ГИБДД',
      // Паспорт транспортного средства
      ptsSeries: '77ТС',
      ptsNumber: '123456789',
      ptsIssueDate: '2019-12-20',
      ptsIssuedBy: 'ГИБДД',
      // Техосмотр
      techInspectionNumber: '088741032500441',
      techInspectionIssueDate: '2024-03-07',
      techInspectionValidUntil: '2025-03-07',
      // Доп. данные
      commissioningDate: '2020-01-15',
      deregistrationDate: null,
      // Реестр перевозчиков
      carrier: '',
      carrierActive: true,
      taxiRegisterNumber: '0030531',
      taxiRegisterDate: '2024-02-13',
      isOverdue: false,
      bookingEndAt: null
    },
    { id: 2, plate: 'В456ГД777', brand: 'Hyundai', model: 'Solaris', vin: 'Z94CB41AAGR123456', sts: '77СТ123457', status: 'Свободна', currentDriver: null, mileage: 89000, category: 'Эконом', curator: 'Сидоров С.С.', hasFines: false, insuranceExpiringDays: 120, hasDebt: false, fuelType: 'АИ-95', isOverdue: false, bookingEndAt: null },
    { id: 3, plate: 'С789ЕЖ777', brand: 'Kia', model: 'Rio', vin: 'Z94CB41AAHR123456', sts: '77СТ123458', status: 'В ремонте', currentDriver: null, mileage: 156000, category: 'Эконом', curator: 'Петров П.П.', hasFines: false, insuranceExpiringDays: 8, hasDebt: false, fuelType: 'АИ-92', isOverdue: false, bookingEndAt: null },
    { id: 4, plate: 'Д012ЗИ777', brand: 'Volkswagen', model: 'Polo', vin: 'WVWZZZ6RZHY123456', sts: '77СТ123459', status: 'Забронировано', currentDriver: 'Смирнов Сергей Сергеевич', mileage: 98000, category: 'Комфорт', curator: 'Сидоров С.С.', hasFines: true, insuranceExpiringDays: 200, hasDebt: true, fuelType: 'АИ-95', isOverdue: true, bookingEndAt: '2026-02-14T18:00:00' },
    { id: 5, plate: 'Е345КЛ777', brand: 'Skoda', model: 'Octavia', vin: 'TMBBA21Z1C2123456', sts: '77СТ123460', status: 'На линии', currentDriver: 'Козлов Константин Константинович', mileage: 112000, category: 'Комфорт', curator: 'Петров П.П.', hasFines: false, insuranceExpiringDays: 15, hasDebt: false, fuelType: 'АИ-95', isOverdue: false, bookingEndAt: null },
    { id: 6, plate: 'Ж678МН777', brand: 'Toyota', model: 'Corolla', vin: 'JTNBF4HKXJ1234568', sts: '77СТ123461', status: 'Свободна', currentDriver: null, mileage: 67000, category: 'Эконом', curator: 'Сидоров С.С.', hasFines: false, insuranceExpiringDays: 90, hasDebt: false, fuelType: 'АИ-95', isOverdue: false, bookingEndAt: null },
    { id: 7, plate: 'З901ОП777', brand: 'Nissan', model: 'Almera', vin: 'JN1AZ4EH0FM123456', sts: '77СТ123462', status: 'На линии', currentDriver: 'Новиков Николай Николаевич', mileage: 134000, category: 'Эконом', curator: 'Петров П.П.', hasFines: true, insuranceExpiringDays: 5, hasDebt: false, fuelType: 'АИ-92', isOverdue: false, bookingEndAt: null },
    { id: 8, plate: 'И234РС777', brand: 'Lada', model: 'Granta', vin: 'XTA219060K1234567', sts: '77СТ123463', status: 'Архив', currentDriver: null, mileage: 178000, category: 'Эконом', curator: 'Сидоров С.С.', hasFines: false, insuranceExpiringDays: 30, hasDebt: false, fuelType: 'АИ-92', isOverdue: false, bookingEndAt: null },
    { id: 9, plate: 'К567ТУ777', brand: 'Hyundai', model: 'Elantra', vin: 'Z94CB41AAGR123457', sts: '77СТ123464', status: 'Забронировано', currentDriver: 'Федоров Федор Федорович', mileage: 101000, category: 'Комфорт', curator: 'Петров П.П.', hasFines: true, insuranceExpiringDays: 180, hasDebt: true, fuelType: 'АИ-95', isOverdue: true, bookingEndAt: '2026-02-13T10:00:00' },
    { id: 10, plate: 'Л890ФХ777', brand: 'Kia', model: 'Cerato', vin: 'Z94CB41AAHR123457', sts: '77СТ123465', status: 'На линии', currentDriver: 'Морозов Михаил Михайлович', mileage: 89000, category: 'Комфорт', curator: 'Сидоров С.С.', hasFines: false, insuranceExpiringDays: 60, hasDebt: false, fuelType: 'АИ-95', isOverdue: false, bookingEndAt: null },
    { id: 11, plate: 'М123ЦЧ777', brand: 'Toyota', model: 'Camry', vin: 'JTNBF4HKXJ1234569', sts: '77СТ123466', status: 'Свободна', currentDriver: null, mileage: 45000, category: 'Комфорт', curator: 'Петров П.П.', hasFines: false, insuranceExpiringDays: 150, hasDebt: false, fuelType: 'АИ-95', isOverdue: false, bookingEndAt: null },
    { id: 12, plate: 'Н456ШЩ777', brand: 'Volkswagen', model: 'Jetta', vin: 'WVWZZZ6RZHY123457', sts: '77СТ123467', status: 'На линии', currentDriver: 'Волков Владимир Владимирович', mileage: 123000, category: 'Комфорт', curator: 'Сидоров С.С.', hasFines: false, insuranceExpiringDays: 25, hasDebt: false, fuelType: 'АИ-95', isOverdue: false, bookingEndAt: null }
  ],

  drivers: [
    { 
      id: 1, 
      name: 'Иванов Сергей Петрович', 
      status: 'Работает', 
      currentCarPlate: 'K477MB122', 
      debtAmount: 0, 
      balanceAmount: 15000, 
      rentRate: 2550, 
      phone: '+7 912 345-67-89', 
      myTaxPhone: '+7 912 345-67-89', 
      phone2: '',
      // Паспорт
      passportSeries: '4509',
      passportNumber: '123456',
      citizenship: 'Российская Федерация',
      gender: 'Мужской',
      passportIssuedBy: 'ОУФМС России по г. Барнаулу',
      passportIssueDate: '2015-08-20',
      passportValidUntil: '2035-08-20',
      passportDepartmentCode: '220-001',
      birthDate: '1990-03-12',
      birthPlace: 'г. Барнаул, Алтайский край',
      registrationAddress: 'Алтайский край, г. Барнаул, ул. Ленина, д. 10',
      // СНИЛС
      snils: '123-456-789 00',
      // Водительские права
      licenseSeries: '2210',
      licenseNumber: '123456',
      licenseIssueDate: '2015-09-18',
      licenseValidUntil: '2025-09-18',
      licenseExperienceStartDate: '2015-09-18',
      licenseInvalid: false,
      licenseCountry: 'Россия',
      // Условия работы
      workCondition: 'Аренда 2550',
      writeOffStartDate: '2025-07-31',
      // Транспортное средство
      vehiclePlate: 'K477MB122',
      vehicleBrand: 'Changan',
      vehicleModel: 'ALSVIN',
      vehicleYear: 2024,
      vehicleMileage: 82907,
      vehicleIsThirdParty: false,
      vehicleStatus: 'На линии'
    },
    { id: 2, name: 'Смирнов Сергей Сергеевич', status: 'Работает', currentCarPlate: 'Д012ЗИ777', debtAmount: 15000, balanceAmount: -5000, rentRate: 6000, phone: '+7 (999) 234-56-78', myTaxPhone: '+7 (999) 234-56-79', phone2: '' },
    { id: 3, name: 'Козлов Константин Константинович', status: 'Работает', currentCarPlate: 'Е345КЛ777', debtAmount: 0, balanceAmount: 8000, rentRate: 5500, phone: '+7 (999) 345-67-89', myTaxPhone: '+7 (999) 345-67-90', phone2: '' },
    { id: 4, name: 'Новиков Николай Николаевич', status: 'Работает', currentCarPlate: 'З901ОП777', debtAmount: 0, balanceAmount: 12000, rentRate: 5000, phone: '+7 (999) 456-78-90', myTaxPhone: '+7 (999) 456-78-91', phone2: '' },
    { id: 5, name: 'Федоров Федор Федорович', status: 'Работает', currentCarPlate: 'К567ТУ777', debtAmount: 12000, balanceAmount: -3000, rentRate: 6000, phone: '+7 (999) 567-89-01', myTaxPhone: '+7 (999) 567-89-02', phone2: '' },
    { id: 6, name: 'Морозов Михаил Михайлович', status: 'Работает', currentCarPlate: 'Л890ФХ777', debtAmount: 0, balanceAmount: 20000, rentRate: 5500, phone: '+7 (999) 678-90-12', myTaxPhone: '+7 (999) 678-90-13', phone2: '' },
    { id: 7, name: 'Волков Владимир Владимирович', status: 'Работает', currentCarPlate: 'Н456ШЩ777', debtAmount: 0, balanceAmount: 10000, rentRate: 6000, phone: '+7 (999) 789-01-23', myTaxPhone: '+7 (999) 789-01-24', phone2: '' },
    { id: 8, name: 'Соколов Степан Степанович', status: 'Неактивен', currentCarPlate: null, debtAmount: 5000, balanceAmount: 0, rentRate: 5000, phone: '+7 (999) 890-12-34', myTaxPhone: '+7 (999) 890-12-35', phone2: '' },
    { id: 9, name: 'Лебедев Леонид Леонидович', status: 'Работает', currentCarPlate: null, debtAmount: 0, balanceAmount: 5000, rentRate: 5000, phone: '+7 (999) 901-23-45', myTaxPhone: '+7 (999) 901-23-46', phone2: '' },
    { id: 10, name: 'Орлов Олег Олегович', status: 'Работает', currentCarPlate: null, debtAmount: 0, balanceAmount: 15000, rentRate: 5500, phone: '+7 (999) 012-34-56', myTaxPhone: '+7 (999) 012-34-57', phone2: '' }
  ],

  fines: [
    // Штрафы для водителя id=1 (Иванов Сергей Петрович)
    { id: 1, date: '2024-12-15', plate: 'K477MB122', driverName: 'Иванов Сергей Петрович', amount: 5000, status: 'Новый', discountAvailable: true, discountDeadline: '2025-01-15', paidDate: null },
    { id: 2, date: '2024-11-20', plate: 'K477MB122', driverName: 'Иванов Сергей Петрович', amount: 3000, status: 'Начислен', discountAvailable: true, discountDeadline: '2024-12-20', paidDate: null },
    { id: 3, date: '2024-10-10', plate: 'А123БВ777', driverName: 'Иванов Сергей Петрович', amount: 2000, status: 'Оплачен', discountAvailable: false, discountDeadline: null, paidDate: '2024-10-25' },
    { id: 4, date: '2024-09-05', plate: 'K477MB122', driverName: 'Иванов Сергей Петрович', amount: 8000, status: 'Оплачен', discountAvailable: false, discountDeadline: null, paidDate: '2024-09-20' },
    { id: 5, date: '2024-08-28', plate: 'K477MB122', driverName: 'Иванов Сергей Петрович', amount: 1500, status: 'Оплачен', discountAvailable: false, discountDeadline: null, paidDate: '2024-09-10' },
    // Штрафы для водителя id=2 (Смирнов Сергей Сергеевич)
    { id: 6, date: '2024-12-10', plate: 'Д012ЗИ777', driverName: 'Смирнов Сергей Сергеевич', amount: 4000, status: 'Новый', discountAvailable: true, discountDeadline: '2025-01-10', paidDate: null },
    { id: 7, date: '2024-11-18', plate: 'Д012ЗИ777', driverName: 'Смирнов Сергей Сергеевич', amount: 2500, status: 'Начислен', discountAvailable: true, discountDeadline: '2024-12-18', paidDate: null },
    { id: 8, date: '2024-10-22', plate: 'Д012ЗИ777', driverName: 'Смирнов Сергей Сергеевич', amount: 6000, status: 'Оплачен', discountAvailable: false, discountDeadline: null, paidDate: '2024-11-05' },
    { id: 9, date: '2024-09-08', plate: 'Д012ЗИ777', driverName: 'Смирнов Сергей Сергеевич', amount: 3500, status: 'Оплачен', discountAvailable: false, discountDeadline: null, paidDate: '2024-09-25' },
    // Штрафы для других водителей
    { id: 10, date: '2024-01-10', plate: 'З901ОП777', driverName: 'Новиков Николай Николаевич', amount: 2000, status: 'Оплачен', discountAvailable: false, discountDeadline: null, paidDate: '2024-01-25' },
    { id: 11, date: '2024-01-18', plate: 'Е345КЛ777', driverName: 'Козлов Константин Константинович', amount: 4000, status: 'Начислен', discountAvailable: false, discountDeadline: null, paidDate: null },
    { id: 12, date: '2024-01-12', plate: 'Л890ФХ777', driverName: 'Морозов Михаил Михайлович', amount: 2500, status: 'Оплачен', discountAvailable: false, discountDeadline: null, paidDate: '2024-01-20' },
    { id: 13, date: '2024-01-22', plate: 'Н456ШЩ777', driverName: 'Волков Владимир Владимирович', amount: 6000, status: 'Новый', discountAvailable: true, discountDeadline: '2024-02-22', paidDate: null },
    { id: 14, date: '2023-12-30', plate: 'К567ТУ777', driverName: 'Федоров Федор Федорович', amount: 10000, status: 'Оплачен', discountAvailable: false, discountDeadline: null, paidDate: '2024-01-15' },
    { id: 15, date: '2024-01-14', plate: 'Е345КЛ777', driverName: 'Козлов Константин Константинович', amount: 1500, status: 'Оплачен', discountAvailable: false, discountDeadline: null, paidDate: '2024-01-28' }
  ],

  serviceOrders: [
    { id: 1, createdAt: '2024-01-20', plate: 'С789ЕЖ777', model: 'Kia Rio', driverName: null, status: 'В работе', paymentStatus: 'Не оплачен', mileage: 156000 },
    { id: 2, createdAt: '2024-01-18', plate: 'И234РС777', model: 'Lada Granta', driverName: null, status: 'Завершён', paymentStatus: 'Оплачен', mileage: 178000 },
    { id: 3, createdAt: '2024-01-15', plate: 'А123БВ777', model: 'Toyota Camry', driverName: 'Иванов Иван Иванович', status: 'Завершён', paymentStatus: 'Оплачен', mileage: 125000 },
    { id: 4, createdAt: '2024-01-10', plate: 'Е345КЛ777', model: 'Skoda Octavia', driverName: 'Козлов Константин Константинович', status: 'Ожидает оплаты', paymentStatus: 'Не оплачен', mileage: 112000 },
    { id: 5, createdAt: '2024-01-08', plate: 'Н456ШЩ777', model: 'Volkswagen Jetta', driverName: 'Волков Владимир Владимирович', status: 'В работе', paymentStatus: 'Не оплачен', mileage: 123000 },
    { id: 6, createdAt: '2024-01-05', plate: 'З901ОП777', model: 'Nissan Almera', driverName: 'Новиков Николай Николаевич', status: 'Завершён', paymentStatus: 'Оплачен', mileage: 134000 },
    { id: 7, createdAt: '2023-12-28', plate: 'Л890ФХ777', model: 'Kia Cerato', driverName: 'Морозов Михаил Михайлович', status: 'Завершён', paymentStatus: 'Оплачен', mileage: 89000 },
    { id: 8, createdAt: '2023-12-25', plate: 'М123ЦЧ777', model: 'Toyota Camry', driverName: null, status: 'Завершён', paymentStatus: 'Оплачен', mileage: 45000 },
    { id: 9, createdAt: '2024-01-22', plate: 'Д012ЗИ777', model: 'Volkswagen Polo', driverName: 'Смирнов Сергей Сергеевич', status: 'В работе', paymentStatus: 'Не оплачен', mileage: 98000 },
    { id: 10, createdAt: '2024-01-12', plate: 'В456ГД777', model: 'Hyundai Solaris', driverName: null, status: 'Завершён', paymentStatus: 'Оплачен', mileage: 89000 }
  ],

  inspections: [
    { id: 1, date: '2024-01-25T10:30:00', plate: 'А123БВ777', type: 'Выдача', mechanicName: 'Механиков М.М.', driverName: 'Иванов Иван Иванович', mileage: 125000, hasDamages: false, hasIncomplete: false, hasLostDocuments: false, notes: 'Все в порядке', photos: [{ url: '../assets/img/placeholder.png', name: 'Фото 1' }, { url: '../assets/img/placeholder.png', name: 'Фото 2' }, { url: '../assets/img/placeholder.png', name: 'Фото 3' }] },
    { id: 2, date: '2024-01-20T14:15:00', plate: 'Е345КЛ777', type: 'Выдача', mechanicName: 'Механиков М.М.', driverName: 'Козлов Константин Константинович', mileage: 112000, hasDamages: false, hasIncomplete: false, hasLostDocuments: false, notes: 'Комплектность полная', photos: [{ url: '../assets/img/placeholder.png', name: 'Фото 1' }, { url: '../assets/img/placeholder.png', name: 'Фото 2' }] },
    { id: 3, date: '2024-01-18T09:45:00', plate: 'З901ОП777', type: 'Возврат', mechanicName: 'Слесарев С.С.', driverName: 'Новиков Николай Николаевич', mileage: 134500, hasDamages: true, hasIncomplete: false, hasLostDocuments: false, notes: 'Царапина на заднем бампере', photos: [{ url: '../assets/img/placeholder.png', name: 'Фото 1' }, { url: '../assets/img/placeholder.png', name: 'Фото 2' }, { url: '../assets/img/placeholder.png', name: 'Фото 3' }, { url: '../assets/img/placeholder.png', name: 'Фото 4' }] },
    { id: 4, date: '2024-01-15T16:20:00', plate: 'Л890ФХ777', type: 'Плановый', mechanicName: 'Слесарев С.С.', driverName: 'Морозов Михаил Михайлович', mileage: 89000, hasDamages: false, hasIncomplete: false, hasLostDocuments: false, notes: null, photos: [] },
    { id: 5, date: '2024-01-12T11:00:00', plate: 'Н456ШЩ777', type: 'Выдача', mechanicName: 'Механиков М.М.', driverName: 'Волков Владимир Владимирович', mileage: 123000, hasDamages: false, hasIncomplete: true, hasLostDocuments: false, notes: 'Отличное состояние', photos: [{ url: '../assets/img/placeholder.png', name: 'Фото 1' }] },
    { id: 6, date: '2024-01-10T13:30:00', plate: 'А123БВ777', type: 'Возврат', mechanicName: 'Механиков М.М.', driverName: 'Иванов Иван Иванович', mileage: 125200, hasDamages: false, hasIncomplete: false, hasLostDocuments: true, notes: null, photos: [{ url: '../assets/img/placeholder.png', name: 'Фото 1' }, { url: '../assets/img/placeholder.png', name: 'Фото 2' }, { url: '../assets/img/placeholder.png', name: 'Фото 3' }] },
    { id: 7, date: '2024-01-08T08:15:00', plate: 'М123ЦЧ777', type: 'Выдача', mechanicName: 'Слесарев С.С.', driverName: null, mileage: 45000, hasDamages: false, hasIncomplete: false, hasLostDocuments: false, notes: 'Новое авто', photos: [{ url: '../assets/img/placeholder.png', name: 'Фото 1' }, { url: '../assets/img/placeholder.png', name: 'Фото 2' }] },
    { id: 8, date: '2024-01-05T15:45:00', plate: 'К567ТУ777', type: 'Возврат', mechanicName: 'Механиков М.М.', driverName: 'Федоров Федор Федорович', mileage: 101500, hasDamages: true, hasIncomplete: false, hasLostDocuments: false, notes: 'Трещина на лобовом стекле', photos: [{ url: '../assets/img/placeholder.png', name: 'Фото 1' }, { url: '../assets/img/placeholder.png', name: 'Фото 2' }, { url: '../assets/img/placeholder.png', name: 'Фото 3' }] },
    { id: 9, date: '2024-01-03T10:00:00', plate: 'В456ГД777', type: 'Плановый', mechanicName: 'Слесарев С.С.', driverName: null, mileage: 89000, hasDamages: false, hasIncomplete: false, hasLostDocuments: false, notes: null, photos: [] },
    { id: 10, date: '2023-12-30T12:00:00', plate: 'Д012ЗИ777', type: 'Возврат', mechanicName: 'Механиков М.М.', driverName: 'Смирнов Сергей Сергеевич', mileage: 98000, hasDamages: false, hasIncomplete: false, hasLostDocuments: false, notes: 'Все исправно', photos: [{ url: '../assets/img/placeholder.png', name: 'Фото 1' }, { url: '../assets/img/placeholder.png', name: 'Фото 2' }] }
  ],

  events: [
    { id: 1, carId: 1, date: '2024-06-26T12:44:27', mileage: 205440, type: 'ДТП', status: 'Открыто', priority: 1, responsible: 'Ичитов Дмитрий Ф.', user: 'Ичитов Дмитрий Ф.', repairRequest: 'Нет', comment: '' },
    { id: 2, carId: 1, date: '2024-11-18T12:31:00', mileage: 210000, type: 'ДТП', status: 'Закрыто', priority: 1, responsible: 'Зайцев Виктор', user: 'Зайцев Виктор', repairRequest: 'Нет', comment: '' },
    { id: 3, carId: 1, date: '2024-12-06T08:46:10', mileage: 215000, type: 'ДТП', status: 'Закрыто', priority: 1, responsible: 'Пилюгин Дмитрий', user: 'Пилюгин Дмитрий', repairRequest: 'Нет', comment: 'Повреждение перед бампера' },
    { id: 4, carId: 1, date: '2025-03-19T12:55:14', mileage: 220000, type: 'ДТП', status: 'Закрыто', priority: 1, responsible: 'Зайцев Виктор', user: 'Зайцев Виктор', repairRequest: 'Нет', comment: '' },
    { id: 5, carId: 1, date: '2025-10-14T12:00:06', mileage: 250000, type: 'ДТП', status: 'Закрыто', priority: 1, responsible: 'Михаил Бабичев', user: 'Михаил Бабичев', repairRequest: 'Нет', comment: 'прокат диска' },
    { id: 6, carId: 1, date: '2025-11-20T05:30:43', mileage: 255000, type: 'ДТП', status: 'Закрыто', priority: 1, responsible: 'Зайцев Виктор', user: 'Зайцев Виктор', repairRequest: 'Нет', comment: '' },
    { id: 7, carId: 3, date: '2024-08-15T10:20:00', mileage: 156500, type: 'Ремонт', status: 'Закрыто', priority: 2, responsible: 'Механиков М.М.', user: 'Механиков М.М.', repairRequest: 'Да', comment: 'Замена тормозных колодок' },
    { id: 8, carId: 4, date: '2024-09-20T14:30:00', mileage: 98500, type: 'ДТП', status: 'Открыто', priority: 1, responsible: 'Смирнов Сергей Сергеевич', user: 'Смирнов Сергей Сергеевич', repairRequest: 'Да', comment: 'Повреждение переднего бампера' },
    { id: 9, carId: 5, date: '2024-10-10T09:15:00', mileage: 113000, type: 'Технический осмотр', status: 'Закрыто', priority: 3, responsible: 'Козлов Константин Константинович', user: 'Козлов Константин Константинович', repairRequest: 'Нет', comment: 'Плановый осмотр' },
    { id: 10, carId: 7, date: '2024-11-05T16:45:00', mileage: 135000, type: 'ДТП', status: 'Открыто', priority: 2, responsible: 'Новиков Николай Николаевич', user: 'Новиков Николай Николаевич', repairRequest: 'Нет', comment: 'Царапина на двери' }
  ],

  users: [
    { id: 1, name: 'Петров Петр Петрович', email: 'p.petrov@example.com', role: 'Администратор', status: 'Активен', createdAt: '2024-01-01' },
    { id: 2, name: 'Сидоров Сидор Сидорович', email: 's.sidorov@example.com', role: 'Администратор', status: 'Активен', createdAt: '2024-01-05' },
    { id: 3, name: 'Механиков Михаил Михайлович', email: 'm.mechanikov@example.com', role: 'Механик', status: 'Активен', createdAt: '2024-01-10' },
    { id: 4, name: 'Слесарев Сергей Сергеевич', email: 's.slesarev@example.com', role: 'Механик', status: 'Активен', createdAt: '2024-01-12' },
    { id: 5, name: 'Иванов Иван Иванович', email: 'i.ivanov@example.com', role: 'Администратор', status: 'Неактивен', createdAt: '2023-12-15' },
    { id: 6, name: 'Менеджеров Максим Максимович', email: 'm.managerov@example.com', role: 'Менеджер', status: 'Активен', createdAt: '2024-01-15' },
    { id: 7, name: 'Управленцева Ульяна Ульяновна', email: 'u.upravlenceva@example.com', role: 'Менеджер', status: 'Активен', createdAt: '2024-01-20' }
  ],

  insurances: [
    {
      carId: 1,
      osago: {
        series: 'XXX',
        number: '0584304735',
        insurer: 'АльфаСтрахование',
        issueDate: '2025-12-28',
        endDate: '2026-12-27',
        premium: 30296.86
      },
      osgop: {
        number: null,
        insurer: null,
        issueDate: null,
        endDate: null,
        premium: null
      },
      dosago: {
        insurer: 'АльфаСтрахование',
        issueDate: '2025-12-28',
        endDate: '2026-12-27',
        premium: 2950.00,
        sum: 400000.00
      },
      kasko: {
        series: null,
        number: null,
        insurer: null,
        issueDate: null,
        endDate: null,
        premium: null,
        franchise: null
      }
    }
  ],

  completeness: [
    { carId: 1, item: 'Шашка такси', status: true },
    { carId: 1, item: 'Магнитола', status: true },
    { carId: 1, item: 'Видеорегистратор', status: true },
    { carId: 1, item: 'Зарядное устройство', status: true },
    { carId: 1, item: 'Планшет для рекламы', status: false },
    { carId: 1, item: 'Детское кресло', status: true },
    { carId: 1, item: 'Бустер', status: false },
    { carId: 1, item: 'Зонт', status: true },
    { carId: 1, item: 'Аптечка', status: true },
    { carId: 1, item: 'Огнетушитель', status: false },
    { carId: 1, item: 'Знак аварийной остановки', status: true },
    { carId: 1, item: 'Трос', status: true },
    { carId: 1, item: 'Крюк', status: true },
    { carId: 1, item: 'Ключ', status: true },
    { carId: 1, item: 'Отвертка', status: false },
    { carId: 1, item: 'Домкрат', status: true },
    { carId: 1, item: 'Баллонный ключ', status: true },
    { carId: 1, item: 'Запаска', status: true },
    { carId: 1, item: 'ГБО', status: false },
    { carId: 1, item: 'СТС', status: true },
    { carId: 1, item: 'ОСАГО', status: true },
    { carId: 1, item: 'Диагностическая карта', status: true },
    { carId: 1, item: 'Лицензия', status: true },
    { carId: 1, item: 'Грязный салон', status: false },
    { carId: 1, item: 'Запах табака', status: false },
    { carId: 1, item: 'Повреждение салонных ковриков', status: false },
    { carId: 1, item: 'Повреждение обшивки дверей', status: false },
    { carId: 1, item: 'Сломанные ручки', status: false },
    { carId: 1, item: 'Требуется химчистка', status: true }
  ],

  documents: [
    { id: 1, carId: 1, type: 'Документ', name: 'ПТС.pdf', date: '2024-01-01', fileName: 'ПТС.pdf' },
    { id: 2, carId: 1, type: 'Фото', name: 'Фото_авто.jpg', date: '2024-01-15', fileName: 'Фото_авто.jpg' }
  ],

  rentHistory: [
    { id: 1, carId: 1, driverName: 'Иванов Иван Иванович', startDate: '2024-01-01T09:00:00', endDate: '2024-01-31T18:00:00' },
    { id: 2, carId: 1, driverName: 'Смирнов Сергей Сергеевич', startDate: '2023-12-01T10:30:00', endDate: '2023-12-31T17:00:00' }
  ],

  vehicleHistory: [
    // История для водителя id=1 (Иванов Сергей Петрович)
    { 
      id: 1, 
      driverId: 1, 
      vehicleName: 'Changan ALSVIN', 
      plate: 'K477MB122', 
      issueDate: '2024-01-15T10:30:00', 
      endDate: null 
    },
    { 
      id: 2, 
      driverId: 1, 
      vehicleName: 'Toyota Camry', 
      plate: 'А123БВ777', 
      issueDate: '2023-06-01T09:00:00', 
      endDate: '2024-01-14T23:59:59' 
    },
    { 
      id: 3, 
      driverId: 1, 
      vehicleName: 'Hyundai Solaris', 
      plate: 'В456ГД777', 
      issueDate: '2022-12-10T14:20:00', 
      endDate: '2023-05-31T23:59:59' 
    },
    { 
      id: 4, 
      driverId: 1, 
      vehicleName: 'Kia Rio', 
      plate: 'С789ЕЖ777', 
      issueDate: '2022-01-05T08:15:00', 
      endDate: '2022-12-09T23:59:59' 
    },
    // История для водителя id=2 (Смирнов Сергей Сергеевич)
    { 
      id: 5, 
      driverId: 2, 
      vehicleName: 'Volkswagen Polo', 
      plate: 'Д012ЗИ777', 
      issueDate: '2024-03-20T11:45:00', 
      endDate: null 
    },
    { 
      id: 6, 
      driverId: 2, 
      vehicleName: 'Skoda Octavia', 
      plate: 'Е345КЛ777', 
      issueDate: '2023-08-15T09:30:00', 
      endDate: '2024-03-19T23:59:59' 
    },
    { 
      id: 7, 
      driverId: 2, 
      vehicleName: 'Nissan Almera', 
      plate: 'З901ОП777', 
      issueDate: '2022-11-10T14:00:00', 
      endDate: '2023-08-14T23:59:59' 
    },
    { 
      id: 8, 
      driverId: 2, 
      vehicleName: 'Lada Granta', 
      plate: 'И234РС777', 
      issueDate: '2021-12-01T08:00:00', 
      endDate: '2022-11-09T23:59:59' 
    },
    // История для водителя id=3 (Козлов Константин Константинович)
    { 
      id: 9, 
      driverId: 3, 
      vehicleName: 'Skoda Octavia', 
      plate: 'Е345КЛ777', 
      issueDate: '2024-02-10T10:20:00', 
      endDate: null 
    },
    { 
      id: 10, 
      driverId: 3, 
      vehicleName: 'Toyota Corolla', 
      plate: 'Ж678МН777', 
      issueDate: '2023-05-20T13:15:00', 
      endDate: '2024-02-09T23:59:59' 
    },
    // История для водителя id=4 (Новиков Николай Николаевич)
    { 
      id: 11, 
      driverId: 4, 
      vehicleName: 'Nissan Almera', 
      plate: 'З901ОП777', 
      issueDate: '2024-04-05T12:00:00', 
      endDate: null 
    },
    { 
      id: 12, 
      driverId: 4, 
      vehicleName: 'Kia Cerato', 
      plate: 'Л890ФХ777', 
      issueDate: '2023-09-18T15:30:00', 
      endDate: '2024-04-04T23:59:59' 
    },
    // История для водителя id=5 (Федоров Федор Федорович)
    { 
      id: 13, 
      driverId: 5, 
      vehicleName: 'Kia Cerato', 
      plate: 'К567ТУ777', 
      issueDate: '2024-01-25T09:45:00', 
      endDate: null 
    },
    { 
      id: 14, 
      driverId: 5, 
      vehicleName: 'Volkswagen Jetta', 
      plate: 'Н456ШЩ777', 
      issueDate: '2023-03-12T11:20:00', 
      endDate: '2024-01-24T23:59:59' 
    },
    // История для водителя id=6 (Морозов Михаил Михайлович)
    { 
      id: 15, 
      driverId: 6, 
      vehicleName: 'Kia Cerato', 
      plate: 'Л890ФХ777', 
      issueDate: '2024-05-10T08:30:00', 
      endDate: null 
    },
    { 
      id: 16, 
      driverId: 6, 
      vehicleName: 'Toyota Camry', 
      plate: 'М123ЦЧ777', 
      issueDate: '2023-07-22T14:00:00', 
      endDate: '2024-05-09T23:59:59' 
    },
    // История для водителя id=7 (Волков Владимир Владимирович)
    { 
      id: 17, 
      driverId: 7, 
      vehicleName: 'Volkswagen Jetta', 
      plate: 'Н456ШЩ777', 
      issueDate: '2024-06-01T10:15:00', 
      endDate: null 
    },
      { 
      id: 18, 
      driverId: 7, 
      vehicleName: 'Hyundai Elantra', 
      plate: 'Н456ШЩ777', 
      issueDate: '2023-10-15T09:00:00', 
      endDate: '2024-05-31T23:59:59' 
    }
  ],

  rentContracts: [
    // Договора для водителя id=1 (Иванов Сергей Петрович)
    {
      id: 1,
      driverId: 1,
      date: '2024-01-15T10:30:00',
      number: 'ДР-2024-001',
      status: 'действующий',
      contractStatus: 'подписанный скан загружен',
      scanUploaded: true,
      issuanceStatus: 'авто выдано',
      vehicleName: 'Changan ALSVIN',
      vehiclePlate: 'K477MB122',
      startDate: '2024-01-15',
      endDate: '2024-12-31',
      dailyRent: 2550,
      totalAmount: 2328000,
      driverName: 'Иванов Сергей Петрович'
    },
    {
      id: 2,
      driverId: 1,
      date: '2023-06-01T09:00:00',
      number: 'ДР-2023-045',
      status: 'истекший',
      contractStatus: 'подписанный скан загружен',
      scanUploaded: true,
      issuanceStatus: 'авто принято',
      vehicleName: 'Toyota Camry',
      vehiclePlate: 'А123БВ777',
      startDate: '2023-06-01',
      endDate: '2024-01-14',
      dailyRent: 5000,
      totalAmount: 1150000,
      driverName: 'Иванов Сергей Петрович'
    },
    // Договора для водителя id=2 (Смирнов Сергей Сергеевич)
    {
      id: 3,
      driverId: 2,
      date: '2024-03-20T11:45:00',
      number: 'ДР-2024-078',
      status: 'действующий',
      contractStatus: 'требуется подписание',
      scanUploaded: false,
      issuanceStatus: null,
      vehicleName: 'Volkswagen Polo',
      vehiclePlate: 'Д012ЗИ777',
      startDate: '2024-03-20',
      endDate: '2024-12-31',
      dailyRent: 6000,
      totalAmount: 1746000,
      driverName: 'Смирнов Сергей Сергеевич'
    },
    {
      id: 4,
      driverId: 2,
      date: '2023-08-15T09:30:00',
      number: 'ДР-2023-112',
      status: 'истекший',
      contractStatus: 'подписанный скан загружен',
      scanUploaded: true,
      issuanceStatus: 'авто принято',
      vehicleName: 'Skoda Octavia',
      vehiclePlate: 'Е345КЛ777',
      startDate: '2023-08-15',
      endDate: '2024-03-19',
      dailyRent: 5500,
      totalAmount: 1259500,
      driverName: 'Смирнов Сергей Сергеевич'
    },
    // Договора для водителя id=3 (Козлов Константин Константинович)
    {
      id: 5,
      driverId: 3,
      date: '2024-02-10T10:20:00',
      number: 'ДР-2024-023',
      status: 'действующий',
      contractStatus: 'требуется заполнение паспорта',
      scanUploaded: false,
      issuanceStatus: null,
      vehicleName: 'Skoda Octavia',
      vehiclePlate: 'Е345КЛ777',
      startDate: '2024-02-10',
      endDate: '2024-12-31',
      dailyRent: 5500,
      totalAmount: 1782000,
      driverName: 'Козлов Константин Константинович'
    },
    // Договора для водителя id=4 (Новиков Николай Николаевич)
    {
      id: 6,
      driverId: 4,
      date: '2024-04-05T12:00:00',
      number: 'ДР-2024-089',
      status: 'действующий',
      contractStatus: 'новый',
      scanUploaded: false,
      issuanceStatus: null,
      vehicleName: 'Nissan Almera',
      vehiclePlate: 'З901ОП777',
      startDate: '2024-04-05',
      endDate: '2024-12-31',
      dailyRent: 5000,
      totalAmount: 1350000,
      driverName: 'Новиков Николай Николаевич'
    }
  ],

  changeHistory: [
    // История изменений для водителя id=1 (Иванов Сергей Петрович)
    {
      id: 1,
      driverId: 1,
      dateTime: '2024-12-20T14:30:00',
      field: 'ФИО',
      oldValue: 'Соловьев Евгений Сергеевич',
      newValue: 'Иванов Сергей Петрович',
      editorName: 'Петров Петр Петрович'
    },
    {
      id: 2,
      driverId: 1,
      dateTime: '2024-12-19T10:15:00',
      field: 'Статус',
      oldValue: 'Активен',
      newValue: 'Работает',
      editorName: 'Сидоров Сидор Сидорович'
    },
    {
      id: 3,
      driverId: 1,
      dateTime: '2024-12-18T16:45:00',
      field: 'Условие работы',
      oldValue: 'Аренда 5000',
      newValue: 'Аренда 2550',
      editorName: 'Петров Петр Петрович'
    },
    {
      id: 4,
      driverId: 1,
      dateTime: '2024-12-17T09:20:00',
      field: 'СНИЛС',
      oldValue: '',
      newValue: '123-456-789 00',
      editorName: 'Петров Петр Петрович'
    },
    {
      id: 5,
      driverId: 1,
      dateTime: '2024-12-16T11:30:00',
      field: 'Дата рождения',
      oldValue: '',
      newValue: '12.03.1990',
      editorName: 'Сидоров Сидор Сидорович'
    },
    // История изменений для водителя id=2 (Смирнов Сергей Сергеевич)
    {
      id: 6,
      driverId: 2,
      dateTime: '2024-12-15T13:25:00',
      field: 'Статус',
      oldValue: 'Неактивен',
      newValue: 'Работает',
      editorName: 'Петров Петр Петрович'
    },
    {
      id: 7,
      driverId: 2,
      dateTime: '2024-12-14T15:10:00',
      field: 'Телефон',
      oldValue: '+7 (999) 234-56-77',
      newValue: '+7 (999) 234-56-78',
      editorName: 'Сидоров Сидор Сидорович'
    },
    {
      id: 8,
      driverId: 2,
      dateTime: '2024-12-13T08:50:00',
      field: 'Адрес регистрации',
      oldValue: 'г. Москва, ул. Ленина, д. 1',
      newValue: 'г. Москва, ул. Пушкина, д. 10',
      editorName: 'Петров Петр Петрович'
    },
    // История изменений для водителя id=3 (Козлов Константин Константинович)
    {
      id: 9,
      driverId: 3,
      dateTime: '2024-12-12T12:00:00',
      field: 'Водительские права - Срок действия',
      oldValue: '18.09.2024',
      newValue: '18.09.2025',
      editorName: 'Петров Петр Петрович'
    },
    {
      id: 10,
      driverId: 3,
      dateTime: '2024-12-11T14:20:00',
      field: 'Условие работы',
      oldValue: 'Аренда 5000',
      newValue: 'Аренда 5500',
      editorName: 'Сидоров Сидор Сидорович'
    }
  ],

  financeTransactions: [
    // Финансовые транзакции для водителя id=1 (Иванов Сергей Петрович)
    { id: 1, driverId: 1, date: '2025-12-26', section: 'Аренда', time: '0:10:03', income: 3200, expense: 0, balance: 1950, paymentMethod: 'Безналичные', description: 'Пополнение баланса через мобильное приложение' },
    { id: 2, driverId: 1, date: '2025-12-25', section: 'Аренда', time: '18:00:01', income: 0, expense: 2550, balance: -1250, paymentMethod: 'Внутренний', description: 'аренда автомобиля, ТС К477МВ122' },
    { id: 3, driverId: 1, date: '2025-12-25', section: 'Аренда', time: '9:58:46', income: 3200, expense: 0, balance: 1300, paymentMethod: 'Безналичные', description: 'Пополнение баланса через мобильное приложение' },
    { id: 4, driverId: 1, date: '2025-12-24', section: 'Аренда', time: '18:00:01', income: 0, expense: 2550, balance: -1900, paymentMethod: 'Внутренний', description: 'аренда автомобиля, ТС К477МВ122' },
    { id: 5, driverId: 1, date: '2025-12-24', section: 'Аренда', time: '9:58:46', income: 3200, expense: 0, balance: 650, paymentMethod: 'Безналичные', description: 'Пополнение баланса через мобильное приложение' }
  ]
};

// Helper function to get data by ID
function getCarById(id) {
  return mockData.cars.find(car => car.id === parseInt(id));
}

function getDriverById(id) {
  return mockData.drivers.find(driver => driver.id === parseInt(id));
}

function getFineById(id) {
  return mockData.fines.find(fine => fine.id === parseInt(id));
}

function getServiceOrderById(id) {
  return mockData.serviceOrders.find(order => order.id === parseInt(id));
}

function getInspectionById(id) {
  return mockData.inspections.find(inspection => inspection.id === parseInt(id));
}

function getUserById(id) {
  return mockData.users.find(user => user.id === parseInt(id));
}

function getEventById(id) {
  return mockData.events.find(event => event.id === parseInt(id));
}

function getEventsByCarId(carId) {
  const id = typeof carId === 'number' ? carId : parseInt(carId);
  return mockData.events.filter(event => event.carId === id);
}

function getInsuranceByCarId(carId) {
  const id = typeof carId === 'number' ? carId : parseInt(carId);
  return mockData.insurances.find(ins => ins.carId === id) || null;
}

function getCompletenessByCarId(carId) {
  const id = typeof carId === 'number' ? carId : parseInt(carId);
  return mockData.completeness.filter(item => item.carId === id);
}

function getDocumentsByCarId(carId) {
  const id = typeof carId === 'number' ? carId : parseInt(carId);
  return mockData.documents.filter(doc => doc.carId === id);
}

function getRentHistoryByCarId(carId) {
  const id = typeof carId === 'number' ? carId : parseInt(carId);
  return mockData.rentHistory.filter(rent => rent.carId === id);
}

function getVehicleHistoryByDriverId(driverId) {
  const id = typeof driverId === 'number' ? driverId : parseInt(driverId);
  return mockData.vehicleHistory.filter(history => history.driverId === id).sort((a, b) => {
    return new Date(b.issueDate) - new Date(a.issueDate);
  });
}

function getRentContractsByDriverId(driverId) {
  const id = typeof driverId === 'number' ? driverId : parseInt(driverId);
  return mockData.rentContracts.filter(contract => contract.driverId === id).sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

function getChangeHistoryByDriverId(driverId) {
  const id = typeof driverId === 'number' ? driverId : parseInt(driverId);
  return mockData.changeHistory.filter(history => history.driverId === id).sort((a, b) => {
    return new Date(b.dateTime) - new Date(a.dateTime);
  });
}

function getFinanceTransactionsByDriverId(driverId) {
  const id = typeof driverId === 'number' ? driverId : parseInt(driverId);
  return mockData.financeTransactions.filter(transaction => transaction.driverId === id).sort((a, b) => {
    return new Date(b.date + 'T' + b.time) - new Date(a.date + 'T' + a.time);
  });
}

function getAllRentContracts() {
  return mockData.rentContracts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

function getRentContractById(id) {
  return mockData.rentContracts.find(contract => contract.id === parseInt(id));
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { mockData, getCarById, getDriverById, getFineById, getServiceOrderById, getInspectionById, getUserById, getEventById, getEventsByCarId, getInsuranceByCarId, getCompletenessByCarId, getDocumentsByCarId, getRentHistoryByCarId, getVehicleHistoryByDriverId, getRentContractsByDriverId, getChangeHistoryByDriverId, getFinanceTransactionsByDriverId, getAllRentContracts, getRentContractById };
}
