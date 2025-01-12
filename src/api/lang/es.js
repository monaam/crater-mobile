export const es = {

    header: {

        // Invoices
        invoices: "Facturas",
        addInvoice: "Agregar factura",
        editInvoice: "Editar factura",

        // Estimates
        estimates: "Estimaciones",
        addEstimate: "Añadir presupuesto",
        editEstimate: "Editar estimación",

        // Templates
        template: "Selecciona una plantilla",

        // Customers
        customers: "Clientes",
        addCustomer: "Agregar cliente",
        editCustomer: "Editar cliente",

        selectCurrency: "Seleccione el tipo de moneda",
        billingAddress: "Dirección de Envio",
        shippingAddress: "Dirección de Envío",

        country: "Seleccionar país",
        state: "Seleccione estado",
        city: "Ciudad selecta",

        // Payments
        payments: "Pagos",
        addPayment: "Agregar pago",
        editPayment: "Editar pago",


        // Expenses
        expenses: "Gastos",
        addExpense: "Añadir gastos",
        editExpense: "Editar gasto",

        // More
        more: "Más",
        expenseCategory: "Categorías de gastos",
        addCategory: "añadir categoría",
        editCategory: "Editar categoria",

        // Setting
        settings: "Configuraciones",
        notifications: "Notificación",
        setting: {
            company: "empresa",
            account: "configuración de cuenta",
            preferences: "Preferencias",
            LanguageAndCurrency: "Idioma y moneda",
            endpoint: "Punto final de API"
        },

        // Taxes
        taxes: "Tipos de impuestos",
        addTaxes: "Agregar impuesto",
        editTaxes: "Editar impuesto",

        // Item
        addItem: "Añadir artículo",
        editItem: "Editar elemento",
        items: "Artículos",

        // Report
        reports: "Informes",
        salesReport: "Reporte de ventas",
        profitAndLossReport: "Informe de pérdidas y ganancias",
        expensesReport: "Informe de gastos",
        taxesReport: "Informe de impuestos",

        // Filter
        filter: "Filtros",

        back: "atrás",
    },

    tabNavigation: {
        invoices: "Facturas",
        customers: "Clientes",
        payments: "pagos",
        expenses: "Gastos",
        more: "Más",
    },

    invoices: {

        title: "Seleccionar factura",

        tabs: {
            DUE: "Debido",
            DRAFT: "Sequía",
            ALL: "Todas"
        },

        invoiceDate: "Fecha",
        dueDate: "Fecha debida",
        discount: "DESCUENTO",
        invoiceNumber: "Numero de factura",
        referenceNumber: "Número de referencia",
        template: "Modelo",
        templatePlaceholder: "Seleccionar o agregar una nueva plantilla",
        customer: "Cliente",
        customerPlaceholder: "Seleccionar cliente",
        items: "Artículos",
        unit: "Unidad",
        addItem: "Añadir artículo",
        notes: "Notas",
        notePlaceholder: "Notas adicionales visibles en la factura",
        taxPlaceholder: "+ Agregar impuesto",
        subtotal: "TOTAL PARCIAL",
        totalAmount: "CANTIDAD TOTAL",
        status: "Estado",
        statusPlaceholder: "Seleccione un estado",
        paidStatus: "Estado pagado",
        paidStatusPlaceholder: "Seleccionar estado pagado",
        fromDate: "Partir de la fecha",
        toDate: "Hasta la fecha",

        alert: {
            removeDescription: "No podrá recuperar esta factura",
            paymentAttachedTitle: "Accion: Fallida",
            paymentAttachedDescription: "No se puede eliminar una factura con un pago existente.",
            draftTitle: "¿Quieres ahorrar?"
        },

        empty: {
            due: {
                title: "No tiene facturas vencidas",
                description: "Esta sección contendrá la lista de facturas vencidas.",
            },
            draft: {
                title: "No tienes facturas en borrador",
                description: "Esta sección contendrá la lista de proyectos de facturas.",
            },
            all: {
                title: "No ha creado ninguna factura.",
            },

            title: "Aún no hay facturas!",
            description: "Esta sección contendrá la lista de facturas.",
            buttonTitle: "Añadir nueva factura"
        },

        actions: {
            downloadPdf: "Descargar PDF",
            sendInvoice: "Enviará la factura",
            editInvoice: "Editar factura",
            delete: "Eliminar",
            recordPayment: "Registro de pago",
            markAsSent: "Marcar como enviado",
        }
    },

    customers: {
        displayName: "Nombre para mostrar",
        contactName: "Nombre de contacto primario",
        email: "Email",
        name: "Nombre",
        phone: "Teléfono",
        website: "Sitio web",
        currency: "Moneda",
        billingAddress: "Dirección de Envio",
        shippingAddress: "Dirección de Envío",
        enablePortal: "Habilitar portal",
        password: "Contraseña",

        filterDisplayName: "Nombre para mostrar",
        filterContactName: "Nombre de contacto",

        alertEmailAlreadyInUse: "Correo electrónico ya en uso",
        alertDescription: "No podrá recuperar a este cliente",

        address: {
            name: "Nombre",
            country: "País",
            state: "Estado",
            city: "Ciudad",
            address: "Habla a",
            street1: "Calle1",
            street2: "Calle2",
            phone: "Teléfono",
            zipcode: "Código postal",
            sameAs: "Copiar de facturación"
        },

        removeCustomer: "Eliminar",

        empty: {
            title: "Aún no hay clientes!",
            description: "Esta sección contendrá la lista de clientes.",
            buttonTitle: "Agregar nuevo cliente",

            country: { title: "Ningún país disponible" },
            state: { title: "No hay estado disponible" },
            city: { title: "No hay ciudad disponible" }
        },

        title: "Seleccione un cliente",
        placeholder: "Seleccionar cliente",
    },

    payments: {

        date: "Fecha",
        number: "Pago no",
        customer: "Cliente",
        customerPlaceholder: "Seleccionar cliente",
        mode: "Modo de pago",
        modePlaceholder: "Seleccionar modo",
        amount: "Cantidad",
        notes: "Notas",
        notesPlaceholder: "Notas adicionales",
        invoice: "Factura",
        invoicePlaceholder: "Seleccionar factura",

        alertAmount: "El pago ingresado es mayor que el monto total adeudado por esta factura.",
        alertDescription: "No podrá recuperar este pago",

        removePayment: "Eliminar",

        empty: {
            title: "Aún no hay pagos!",
            description: "Esta sección contendrá la lista de pagos.",
            buttonTitle: "Agregar nuevo pago",
        },
    },

    expenses: {
        receipt: "Recibo",
        date: "Fecha de gastos",
        fromDate: "Partir de la fecha",
        toDate: "Hasta la fecha",
        amount: "Cantidad",
        category: "Categoría",
        categoryPlaceholder: "selecciona una categoría",
        notes: "Notas",
        notesPlaceholder: "Notas adicionales",
        viewReceipt: "Ver recibo",

        alertDescription: "No podrá recuperar este gasto",
        removeExpense: "Eliminar",

        noCategories: "Aún no hay categorías!",

        empty: {
            title: "Aún no hay gastos!",
            description: "Esta sección contendrá la lista de gastos.",
            buttonTitle: "Añadir nuevo gasto",
        },
    },

    items: {

        title: "Seleccione un artículo",

        name: "Nombre del árticulo",
        description: "Descripción (opcional)",
        quantity: "Cantidad",
        price: "Precio",
        subTotal: "TOTAL PARCIAL",
        discountType: "Tipo de descuento",
        discount: "Descuento",
        finalDiscount: "DESCUENTO",
        finalAmount: "CANTIDAD",
        taxes: "Impuestos",
        selectTax: "Seleccionar impuestos",
        unit: "Unidad",
        unitPlaceholder: "Seleccionar unidad",

        alertDescription: "No podrás recuperar este artículo",
        lessAmount: "La cantidad total no debe ser inferior a 0",

        alreadyAttachTitle: "Accion: Fallida",
        alreadyAttachDescription: "No se puede eliminar un elemento que ya está en uso.",

        empty: {
            title: "Aún no hay artículos!",
            description: "Esta sección contendrá la lista de artículos.",
            buttonTitle: "Agregar nuevos elementos",
        },
    },

    more: {
        estimate: "Estimados",
        items: "Artículos",
        reports: "Informes",
        settings: "Configuraciones",
        logout: "Cerrar sesión",
    },

    categories: {

        title: "nombre de la categoría",
        description: "Descripción",

        alertDescription: "No podrás recuperar esta categoría",
        alreadyUsed: "Categoría ya en uso",

        empty: {
            title: "Aún no hay categorías!",
            description: "Esta sección contendrá la lista de categorías.",
            buttonTitle: "Añadir nueva categoria"
        }
    },

    settings: {
        accountSettings: "configuración de cuenta",
        companyInformation: "Empresa",
        preference: "Preferencias",
        LanguageAndCurrency: "Idioma y moneda",
        notification: "Notificaciones",
        taxes: "Tipos de impuestos",
        expenseCategory: "Categorías de gastos",

        endpoint: "point final api",

        company: {
            name: "nombre de empresa",
            email: "Email",
            phone: "Teléfono",
            address: "Habla a",
            street1: "Calle 1",
            street2: "Calle 2",
            zipcode: "Código postal",
            website: "Sitio web",
            logo: "Logo de la compañía"
        },

        account: {
            name: "Nombre",
            email: "Email",
            password: "Contraseña",
            confirmPassword: "Confirmar contraseña",
            version: "Versión"
        },

        notifications: {
            send: "Enviar notificaciones a",
            invoiceViewed: "Factura vista",
            invoiceViewedUpdated: "Configuración de notificaciones actualizada correctamente",
            invoiceViewedDescription: "Cuando su cliente ve el enlace de la factura enviado por correo electrónico.",

            estimateViewed: "Estimación vista",
            estimateViewedDescription: "Cuando su cliente ve el enlace estimado enviado por correo electrónico.",
            estimateViewedUpdated: "Configuración de notificaciones actualizada correctamente",
        },

        preferences: {
            currency: "Moneda",
            currencyPlaceholder: "Seleccione el tipo de moneda",
            language: "Idioma",
            languagePlaceholder: "Seleccione el idioma",
            timeZone: "Zona horaria",
            timeZonePlaceholder: "Selecciona la zona horaria",
            dateFormat: "Formato de fecha",
            dateFormatPlaceholder: "Seleccionar formato de fecha",
            fiscalYear: "Año financiero",
            fiscalYearPlaceholder: "Seleccionar año financiero",
            discountSetting: "Ajuste de descuento",
            discountPerItem: "Descuento por artículo",
            discountPerItemPlaceholder: "Habilítelo si desea agregar Descuento a artículos de factura individuales. Por defecto, los descuentos se agregan directamente a la factura.",
            taxPerItem: "Impuesto por artículo",
            taxPerItemPlaceholder: "Habilítelo si desea agregar Impuestos a artículos de factura individuales. Por defecto, los impuestos se agregan directamente a la factura.",

            settingUpdate: "Configuración actualizada con éxito"
        }
    },

    login: {
        email: "Introduce tu correo electrónico",
        password: "Ingresa tu contraseña",
        invalid: "Credenciales no válidas"
    },
    logout: {
        confirmation: "¿Estás seguro de que quieres cerrar sesión?",
        title: "Cerrar sesión"
    },
    forgot: {
        emailLabel: "Ingrese su correo electrónico y le enviaremos un enlace para restablecer la contraseña",
        emailPlaceholder: "Introduce tu correo electrónico",
        emailSendTitle: "Consultar su correo electrónico",
        emailSendDescription: " Se ha enviado un enlace de restablecimiento de contraseña a su correo electrónico. Siga las instrucciones en el correo electrónico para crear una nueva contraseña",
        emailSendError: "No se pudo enviar el correo electrónico a esta dirección de correo electrónico.",
    },

    lostInternet: {
        title: "Conexión perdida",
        description: "Verifique la configuración de su dispositivo móvil o Wifi para verificar su conectividad a Internet e intente nuevamente."
    },

    updateApp: {
        title: "¡Versión de la aplicación caducada!",
        description: "Esta versión de la aplicación está desactualizada. Instala la última actualización para seguir usando Crater."
    },

    endpoint: {
        endpointURL: "URL de punto final",
        endpointDesc: "La URL anterior se usará para conectarse con su instalación de cráter autohospedada.",
        urlPlaceHolder: "p.ej: https://craterapp.com",
        alertInvalidUrl: "URL invalida",
    },

    estimates: {

        tabs: {
            SENT: "Expedido",
            DRAFT: "Sequía",
            ALL: "Todas"
        },

        estimateDate: "Fecha",
        expiryDate: "Fecha Expiración",
        discount: "DESCUENTO",
        estimateNumber: "Numero Estimado",
        template: "Modelo",
        templatePlaceholder: "Seleccionar o agregar una nueva plantilla",
        customer: "Cliente",
        customerPlaceholder: "Seleccionar cliente",
        items: "Artículos",
        unit: "Unidad",
        taxPlaceholder: "+ Agregar impuesto",
        addItem: "Añadir artículo",
        notes: "Notas",
        notePlaceholder: "Notas adicionales visibles en la estimación",

        fromDate: "Partir de la fecha",
        toDate: "Hasta la fecha",
        status: "Estado",
        statusPlaceholder: "Seleccione un estado",

        subtotal: "TOTAL PARCIAL",
        tax: "IMPUESTO",
        totalAmount: "CANTIDAD TOTAL",

        alert: {
            convertToInvoiceDescription: "¿Está seguro de que desea convertir esta estimación en una factura?",
            removeDescription: "No podrá recuperar esta estimación",
            lessAmount: "La cantidad total no debe ser inferior a 0",
            draftTitle: "¿Guardar cambios?",
        },

        empty: {
            sent: {
                title: "No tienes estimaciones enviadas",
                description: "Esta sección contendrá la lista de estimaciones enviadas.",
            },
            draft: {
                title: "No tienes borradores de estimaciones",
                description: "Esta sección contendrá la lista de proyectos de estimaciones.",
            },
            all: {
                title: "No has creado ninguna estimación.",
                description: "Esta sección contendrá la lista de estimaciones.",
            },

            buttonTitle: "Añadir nuevo presupuesto"
        },

        actions: {
            downloadPdf: "Descargar PDF",
            sendEstimate: "Enviar presupuesto",
            editEstimate: "Editar estimación",
            delete: "Eliminar",
            convertToInvoice: "Convertir a factura",
            markAsSent: "Marcar como enviado",
            markAsAccepted: "Marcar como aceptado",
            markAsRejected: "Marcar como rechazado",
        }
    },

    currencies: {
        title: "Seleccione el tipo de moneda",
        empty: {
            title: "¡Aún no hay monedas!",
        }
    },

    languages: {
        title: "Seleccione el idioma",
        empty: {
            title: "¡Aún no hay idiomas!",
            description: "Esta sección contendrá la lista de idiomas.",
        }
    },

    timeZones: {
        title: "Selecciona la zona horaria",
        empty: {
            title: "No hay zonas horarias todavía!",
            description: "Esta sección contendrá la lista de zonas horarias.",
        }
    },

    dateFormats: {
        title: "Seleccionar formato de fecha",
        empty: {
            title: "¡Aún no hay formatos de fecha!",
            description: "Esta sección contendrá la lista de formatos de fecha.",
        }
    },

    fiscalYears: {
        title: "Seleccionar año financiero",
        empty: {
            title: "No hay años financieros todavía!",
            description: "Esta sección contendrá la lista de ejercicios financieros.",
        }
    },

    reports: {
        sales: "Ventas",
        profitAndLoss: "Pérdida de beneficios",
        expenses: "Gastos",
        taxes: "Impuestos",
        dateRange: "Seleccionar rango de fechas",
        fromDate: "Partir de la fecha",
        toDate: "Hasta la fecha",
        reportType: "Tipo de informe",

        byCustomer: "Por el cliente",
        byItem: "Por artículo",

        today: "Hoy",
        thisWeek: "Esta semana",
        thisMonth: "Este mes",
        thisQuarter: "Este cuarto",
        thisYear: "Este año",
        currentFiscalQuarter: "Trimestre fiscal actual",
        currentFiscalYear: "Año fiscal actual",
        previousWeek: "Semana pasada",
        previousMonth: "Mes anterior",
        previousQuarter: "Trimestre anterior",
        previousYear: "Año anterior",
        previousFiscalQuarter: "Trimestre fiscal anterior",
        previousFiscalYear: "Año fiscal anterior",
        custom: "Personalizado",

    },

    taxes: {

        title: "Impuestos",

        type: "Nombre fiscal",
        description: "Descripción",
        percentage: "Porcentaje fiscal",
        compoundTax: "Impuesto compuesto",

        alertDescription: "No podrá recuperar este impuesto",
        alreadyUsed: "Impuesto ya en uso",

        empty: {
            title: "No hay tipos de impuestos todavía!",
            description: "Esta sección contendrá la lista de tipos de impuestos.",
            buttonTitle: "Agregar tipo de impuesto",
        },
    },


    filePicker: {
        file: "Haga clic aquí para elegir un archivo.",
        permission: "Lo sentimos, necesitamos permisos de cámara para hacer que esto funcione."
    },

    alert: {
        title: "¿Estás seguro?",
        action: {
            discard: "Descarte",
            saveAsDraft: "Guardar como borrador",
            emailNotExist: "El correo electrónico del usuario no existe"
        }
    },

    button: {

        remove: "Eliminar",
        save: "Salvar",
        edit: "Editar",
        retry: "Procesar de nuevo",
        done: "Hecho",
        skip: "Omitir",
        clear: "Claro",

        // Invoices
        viewPdf: "Ver PDF",

        // Auth
        singIn: "Registrarse",
        singInGoogle: "Inicia sesión con Google",
        forget: "¿Contraseña olvidada?",

        update: "Actualizar",
        updateCapital: "ACTUALIZAR",
        chooseTemplate: "Elegir la plantilla",

        // Reports
        generateReport: "Generar informe",

        recoveryEmail: "Enviar enlace de reinicio",
        recoveryEmailAgain: "Enviar de nuevo",
    },

    filter: {
        empty: {
            filterTitle: "No se han encontrado resultados"
        }
    },

    search: {
        title: "Buscar",
        noResult: 'No hay resultados para "{{search}}"',
        noSearchResult: 'No hay resultados para',
    },

    validation: {
        Customer: "Cliente",
        Invoice: "Factura",
        required: "El campo obligatorio está vacío.",
        field: "{{hint}} Se requiere campo",
        choose: "Elige al menos un artículo",
        email: "Por favor, introduce una dirección de correo electrónico válida",
        passwordCompare: "Las contraseñas no coinciden",
        minimumNumber: "debe ser mayor que 0",
        maximumNumber: "debe ser menor que {{maxNumber}}",
        numeric: "debe ser numérico",
        moreThanDue: "{{hint}} No debe ser más que el monto adeudado.",
        url: "URL invalida (p.ej: https://craterapp.com)"
    },

};